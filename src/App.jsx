import React, { useRef, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import add from "./assets/add-square.svg";
import left from "./assets/left.svg";
import right from "./assets/right.png";
import Column from "./components/Column";
import cardimg1 from "./assets/cardimg1.svg";
import cardimg2 from "./assets/cardimg2.svg";
import cardimg3 from "./assets/cardimg3.svg";
import cardimg4 from "./assets/cardimg4.svg";
import cardimg5 from "./assets/cardimg5.svg";
import cardimg6 from "./assets/cardimg6.svg";
import cardimg7 from "./assets/cardimg7.svg";
import cardimg8 from "./assets/cardimg8.svg";
import carimg9 from "./assets/carimg9.svg";
import Header from "./components/Header";
function App() {
  const [columns, setColumns] = useState([]);
  const refs = useRef({});

  const handleAdd = () => {
    const id = columns.length + 1;
    setColumns([...columns, { id, content: `Ustun ${id}` }]);
    refs.current[id] = { name: React.createRef(), key: React.createRef() };
  };

  const moveColumn = (fromIndex, toIndex) => {
    const updatedColumns = Array.from(columns);
    const [movedColumn] = updatedColumns.splice(fromIndex, 1);
    updatedColumns.splice(toIndex, 0, movedColumn);
    setColumns(updatedColumns);
  };

  return (
    <>
      <Header></Header>
      <div className="mx-auto border-solid border-2  w-[1360px] mt-[30px] rounded-2xl py-[24px] px-[16px]">
        <div className="flex mx-auto items-center justify-between w-[1340px] p-[6px]">
          <div className="flex items-center gap-[24px]">
            <img src={left} alt="" />
            <h2 className="text-[24px] font-bold text-[#171725]">
              Yangi loyiha ochish
            </h2>
          </div>
          <div className="flex items-center gap-[16px] mr-[18px]">
            <button className="bg-[#E2E2EA] py-[12px] px-[51px] rounded-lg text-[#92929D]">
              Ortga
            </button>
            <div className="bg-[#0062FF] py-[12px] px-[18px] rounded-lg text-[#fff] cursor-pointer flex items-center gap-[8px]">
              <p>Davom etish</p> <img src={right} alt="" />
            </div>
          </div>
        </div>
        <hr />

        <div className="bg-[#F8F8F8]  w-[1322px] p-[24px]  rounded-2xl mt-[16px] flex flex-wrap gap-[12px]">
          <div className="bg-[#fff] py-[16px] align-center flex items-center  w-[240px] gap-[16px] cursor-pointer rounded-lg">
            <img src={cardimg1} alt="" className="w-[36px] ml-[24px]" />
            <p className="text-[#2E2C34] text-lg font-[600] ">
              Bitbucket Cloud
            </p>
          </div>
          <div className="bg-[#fff] py-[16px] align-center flex items-center  w-[240px] gap-[16px] cursor-pointer rounded-lg">
            <img src={cardimg2} alt="" className="w-[36px] ml-[24px]" />
            <p className="text-[#2E2C34] text-lg font-[600] ">Dropbox Paper</p>
          </div>
          <div className="bg-[#fff] py-[16px] align-center flex items-center  w-[240px] gap-[16px] cursor-pointer rounded-lg">
            <img src={cardimg3} alt="" className="w-[36px] ml-[24px]" />
            <p className="text-[#2E2C34] text-lg font-[600] ">Giphy</p>
          </div>
          <div className="bg-[#fff] py-[16px] align-center flex items-center  w-[240px] gap-[16px] cursor-pointer rounded-lg">
            <img src={cardimg4} alt="" className="w-[36px] ml-[24px]" />
            <p className="text-[#2E2C34] text-lg font-[600] ">
              Google Calendar
            </p>
          </div>
          <div className="bg-[#fff] py-[16px] align-center flex items-center  w-[240px] gap-[16px] cursor-pointer rounded-lg">
            <img src={carimg9} alt="" className="w-[36px] ml-[24px]" />
            <p className="text-[#2E2C34] text-lg font-[600] ">Google Drive</p>
          </div>
          <div className="bg-[#fff] py-[16px] align-center flex items-center  w-[240px] mt-[12px] gap-[16px] cursor-pointer rounded-lg">
            <img src={cardimg5} alt="" className="w-[36px] ml-[24px]" />
            <p className="text-[#2E2C34] text-lg font-[600] ">Notion</p>
          </div>
          <div className="bg-[#fff] py-[16px] align-center flex items-center  w-[240px] mt-[12px] gap-[16px] cursor-pointer rounded-lg">
            <img src={cardimg6} alt="" className="w-[36px] ml-[24px]" />
            <p className="text-[#2E2C34] text-lg font-[600] ">Trello</p>
          </div>
          <div className="bg-[#fff] py-[16px] align-center flex items-center  w-[240px] mt-[12px] gap-[16px] cursor-pointer rounded-lg">
            <img src={cardimg7} alt="" className="w-[36px] ml-[24px]" />
            <p className="text-[#2E2C34] text-lg font-[600] ">Intercom</p>
          </div>
          <div className="bg-[#fff] py-[16px] align-center flex items-center  w-[240px] mt-[12px] gap-[15px] cursor-pointer rounded-lg">
            <img src={cardimg8} alt="" className="w-[36px] ml-[18px]" />
            <p className="text-[#2E2C34] text-lg font-[600] ">
              Google Tag Manager
            </p>
          </div>
        </div>

        <DndProvider backend={HTML5Backend}>
          <div className="max-w-screen-2xl mt-[16px] container mx-auto flex items-center flex-col gap-3 w-[1322px]">
            <div className="w-full rounded-xl border bg-[#F8F8F8] p-6">
              <h1 className="font-semibold text-2xl mb-6">
                Loyiha ketma-ketligi
              </h1>
              {columns.map((column, index) => (
                <Column
                  nameRef={refs.current[column.id]?.name}
                  keyRef={refs.current[column.id]?.key}
                  key={column.id}
                  id={column.id}
                  index={index}
                  moveColumn={moveColumn}
                />
              ))}
              <div className="flex items-center justify-between">
                <button
                  onClick={handleAdd}
                  className="transition flex items-center gap-2 cursor-pointer hover:opacity-70"
                >
                  <img src={add} alt="column add icon" />
                  <p className="text-[#0062FF] font-medium">Ustun qo’shish</p>
                </button>
              </div>
            </div>
          </div>
        </DndProvider>
      </div>
    </>
  );
}

export default App;
