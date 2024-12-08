'use client'
import {TOOLS_META} from "@/app/config/page-meta";
import PageTitle from "@/app/tools/components/page-title";
import DragSelect from "@/app/tools/components/drag-select";
import {useState, useRef} from "react";
import {toast} from "react-toastify";
import * as pdfjsLib from 'pdfjs-dist'
import {PDFDocument, degrees} from "pdf-lib";
import {downloadToSave, getFileAsUnit8Array, getRenderedCanvas, removeFileExtension} from "@/app/services/utils";
import ControlPanel from "@/app/tools/rotate-pdf/components/control-panel";
import UpLoader from "@/app/components/uploader";
import LoadingSpin from "@/app/components/loading-spin";
import PageContainer from "@/app/tools/components/page-container";
import DownloadBar from "@/app/tools/rotate-pdf/components/download-bar";

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@4.9.155/build/pdf.worker.min.mjs';
const PAGE_META = TOOLS_META['rotate-pdf']
const MAX_WIDTH = 500;
const MIN_WIDTH = 100;

export default function RotatePDF() {
  const [pageDataList, setPageDataList] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [fileDataAsUnit8Array, setFileDataAsUnit8Array] = useState(void 0);
  const [pageContainerWidth, setPageContainerWidth] = useState(200);
  const [fileName, setFileName] = useState("");
  const pageRef = useRef(null)

  /**
   *
   * @param fileList {file[]}
   * @returns {Promise<void>}
   */
  const handleFileChange = async fileList => {
    setProcessing(true);
    try {
      const newPageDataList = [];
      const file = fileList[0];
      const fileDataAsUint8Array = await getFileAsUnit8Array(file);
      setFileDataAsUnit8Array(fileDataAsUint8Array.slice())
      const PDFDocument = await pdfjsLib.getDocument(fileDataAsUint8Array).promise;
      const promiseArr = []

      for (let curPageNum = 1; curPageNum < PDFDocument.numPages + 1; curPageNum++) {
        const page = await PDFDocument.getPage(curPageNum);
        //将pdf页面渲染为canvas并返回canvas元素, 性能瓶颈
        const canvas = await getRenderedCanvas(page, {viewportScale: 1});
        newPageDataList.push({pageNum: curPageNum, canvas: canvas, selected: true, rotation: 0})
      }
      setFileName(file.name);
      setPageDataList([...pageDataList, ...newPageDataList])
    } catch (e) {
      console.warn(e);
      toast("Something went wrong importing your PDF")
    }
    setProcessing(false)
  }


  const handleDownload = async () => {
    const pdf = await PDFDocument.load(fileDataAsUnit8Array),
      pageCount = pdf.getPageCount();
    for (let pageNum = 0; pageNum < pageCount; pageNum++) {
      pdf.getPage(pageNum).setRotation(degrees(pageDataList[pageNum].rotation))
    }
    const blob = new Blob([await pdf.save()], {type: "application/pdf"});
    downloadToSave(blob, "".concat(removeFileExtension(fileName), "(pdf.ai-rotated).pdf"))
  }

  const handleRotateAll = () => {
    setPageDataList(pageDataList.map(pageData => {pageData.rotation += 90;
      return pageData
    }
    ))
  }

  const handleRemove = () => {
    setPageDataList([]);
    // setFileDataAsUint8Array(void 0)
  }

  /**
   * @param zoomIn {boolean}
   */
  const handleZoom = zoomIn => {
    zoomIn ? setPageContainerWidth(Math.min(pageContainerWidth + 50, MAX_WIDTH)) : setPageContainerWidth(Math.max(pageContainerWidth - 50, MIN_WIDTH))
  }

  return (
    <div className="container mx-auto py-20 space-y-5">
      <DragSelect
        container={pageRef.current}
        selectableTargets={[".pdf-page"]}
        ignoreClass=".selecto-ignore"
        indexAttrProp="data-page-num"
        onChange={ (pageIndex, action) => {
          let copy = pageDataList.slice();
          copy[Number(index)].selected = action !== 'remove';
          setPageDataList(copy)
        }
    }
      />
      <PageTitle title={PAGE_META.title} description={PAGE_META.description}/>
      {
        pageDataList.length > 0
        && (
          <ControlPanel
            onRotateAll={handleRotateAll}
            onRemove={handleRemove}
            onZoomIn={() => handleZoom(true)}
            onZoomOut={() => handleZoom(false)}
            disabledZoomIn={pageContainerWidth >= MAX_WIDTH}
            disabledZoomOut={pageContainerWidth <= MIN_WIDTH}
          />
        )
      }
      {
        pageDataList.length === 0 && !processing
        && (
          <div
            className="w-full flex justify-center"
          >
            <UpLoader onFileChange={handleFileChange} />
          </div>
        )
      }
      {
        processing
        && (
          <div className="flex justify-center">
            <LoadingSpin color="black" />
          </div>
        )
      }
      {
        !processing
        && (
          <div
            ref={pageRef}
            className="flex flex-wrap justify-center"
          >
            {pageDataList.map((pageData, pageIndex) => (
              <div
                key={pageIndex}
                className="m-3"
                style={{
                  maxWidth: "".concat(String(pageContainerWidth), "px"),
                  flex: "0 0 ".concat(String(pageContainerWidth), "px")
              }}
              >
                <PageContainer
                  index={pageIndex}
                  name={String(pageIndex + 1)}
                  canvas={pageData.canvas}
                  rotation={pageData.rotation}
                  onRotate={deg => {
                    pageData.rotation = deg;
                    setPageDataList([...pageDataList])
                  }}
                />
              </div>
            ))}
          </div>
        )
      }
      {
        pageDataList.length > 0
        && (
          <div
            className="flex flex-col justify-center items-center space-y-3 selecto-ignore"
          >
            <DownloadBar
              onDownload={handleDownload}
              disabled={pageDataList.filter(pageData => pageData.selected).length === 0 }
            />
          </div>
        )
      }
    </div>
  )
}