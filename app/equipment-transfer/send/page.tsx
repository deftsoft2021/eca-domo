"use client";
import { useState } from "react";
import MainLayout from "@/app/layouts/MainLayout";
import Swal from "sweetalert2";
import EquipmentTransferForm from "@/app/components/EquipmentTransferForm";
import EquipmentSelectModal from "@/app/components/EquipmentSelectModal";

// type EquipmentItem = {
//   name: string;
//   qty: number;
// };

export default function EquipmentSendPage() {
  const [form, setForm] = useState({
    businessUnit: "LOTUS",
    date: new Date().toISOString().slice(0, 10),
    docNo: "NEW",
    origin: "902 WNDC",
    destination: "",
    trunking: "",
    transporter: "Lotus Transport",
    driver: "",
    license: "",
    tripNo: "",
    sealNo: "",
    note: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState<
    Record<string, number>
  >({});
  const equipmentList = [
    { name: "พาเลท Loscam", stock: 100, wms: 5, image: "/img/loscam.png" },
    { name: "พาเลท Chep", stock: 100, wms: 2, image: "/img/chep.png" },
    // ...อื่น ๆ...
  ];

  //   const [equipment, setEquipment] = useState<EquipmentItem[]>([]);
  //   const [equipmentInput, setEquipmentInput] = useState({ name: "", qty: 1 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //   const handleEquipmentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setEquipmentInput({ ...equipmentInput, [e.target.name]: e.target.value });
  //   };

  //   const handleAddEquipment = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     if (!equipmentInput.name || !equipmentInput.qty) return;
  //     setEquipment([
  //       ...equipment,
  //       { name: equipmentInput.name, qty: Number(equipmentInput.qty) },
  //     ]);
  //     setEquipmentInput({ name: "", qty: 1 });
  //   };

  //   const handleRemoveEquipment = (idx: number) => {
  //     setEquipment(equipment.filter((_, i) => i !== idx));
  //   };

  // ฟังก์ชัน alert Coming Soon
  const handleComingSoon = (title: string) => {
    Swal.fire({
      icon: "info",
      title,
      text: "Coming Soon",
      confirmButtonText: "ตกลง",
    });
  };

  return (
    <MainLayout>
      <div className="flex flex-col gap-2 p-2  min-h-screen">
        {/* <h1 className="text-2xl font-bold text-primary mb-2">ส่งอุปกรณ์</h1> */}
        <div className="flex gap-4">
          <EquipmentTransferForm form={form} onChange={handleChange}>
            {/* เพิ่มปุ่มหรือฟีเจอร์เฉพาะหน้า "ส่ง" ได้ที่นี่ */}
            <div className="border-t border-gray-100 pt-2 mt-2">
              <button
                className="btn btn-primary w-full"
                type="button"
                onClick={() => setShowModal(true)}
              >
                เพิ่มอุปกรณ์
              </button>
            </div>
          </EquipmentTransferForm>
          {/* ตารางขวา */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Search bar */}
            <div className="bg-white rounded shadow p-4 flex flex-wrap gap-2 items-end mb-2">
              <div>
                <label className="form-label">วันที่</label>
                <input type="date" className="input" />
              </div>
              <div>
                <label className="form-label">เลขที่เอกสาร</label>
                <input
                  type="text"
                  className="input w-[200px]"
                  placeholder="ECA No"
                />
              </div>
              <div>
                <label className="form-label">Trip No</label>
                <input
                  type="text"
                  className="input w-[200px]"
                  placeholder="Trip No"
                />
              </div>
              <div>
                <label className="form-label">ดีซี / สาขา</label>
                <input
                  type="text"
                  className="input w-[150px]"
                  placeholder="DC / Store"
                />
              </div>
              <div>
                <label className="form-label">BOL/Load Manifest</label>
                <input
                  type="text"
                  className="input"
                  placeholder="BOL/Load Manifest"
                />
              </div>
              <div>
                <label className="form-label">สถานะ</label>
                <input type="text" className="input " placeholder="สถานะ" />
              </div>
              <button className="btn btn-primary ml-2">ค้นหา</button>
            </div>
            {/* ตารางข้อมูล */}
            <div className="bg-white rounded theme-border flex-1 overflow-auto min-h-[300px]">
              <table className="table min-w-full">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="bg-white">ประเภท</th>
                    <th className="bg-white">วันที่</th>
                    <th className="bg-white">Trip No</th>
                    <th className="bg-white">ต้นทาง</th>
                    <th className="bg-white">ปลายทาง</th>
                    <th className="bg-white">ทะเบียนรถ</th>
                    <th className="bg-white">สถานะ</th>
                  </tr>
                </thead>
                <tbody>{/* ข้อมูลจริงแสดงตรงนี้ */}</tbody>
              </table>
            </div>
            {/* ตารางล่าง */}
            <div className="rounded shadow mt-2 p-4 bg-gray-50">
              <div className="w-full grid grid-cols-6 gap-2 rounded ">
                <div>
                  <label className="text-sm">วันที่</label>
                  <div className="font-bold text-sm">{form.date}</div>
                </div>
                <div>
                  <label className="text-sm">Trip No</label>
                  <div className="font-bold text-sm">{form.tripNo}</div>
                </div>
                <div>
                  <label className="text-sm">เลขที่เอกสาร</label>
                  <div className="font-bold text-sm">{form.docNo}</div>
                </div>
                <div>
                  <label className="text-sm">ขนส่ง</label>
                  <div className="font-bold text-sm">{form.transporter}</div>
                </div>
                <div>
                  <label className="text-sm">ทะเบียนรถ/พขร</label>
                  <div className="font-bold text-sm">
                    {form.license} / {form.driver}
                  </div>
                </div>
                <div>
                  <label className="text-sm">ประเภท</label>
                  <div className="font-bold text-sm">-</div>
                </div>
                <div>
                  <label className="text-sm">ต้นทาง</label>
                  <div className="font-bold text-sm">{form.origin}</div>
                </div>
                <div>
                  <label className="text-sm">ปลายทาง</label>
                  <div className="font-bold text-sm">{form.destination}</div>
                </div>
                <div>
                  <label className="text-sm">Trunking</label>
                  <div className="font-bold text-sm">{form.trunking}</div>
                </div>
                <div>
                  <label className="text-sm">ซีลหมายเลข</label>
                  <div className="font-bold text-sm">{form.sealNo}</div>
                </div>
                <div className="col-span-2">
                  <label className="text-sm">หมายเหตุ</label>
                  <div className="font-bold text-sm">{form.note}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[1fr_250px] gap-2 mt-2">
              <div className="bg-white rounded shadow p-4">
                <div className="theme-border rounded mt-2">
                  <table className="table min-w-full text-sm min-h-[300px]">
                    <thead>
                      <tr>
                        <th className="bg-white border-b  w-[50px]">#</th>
                        <th className="bg-white border-b">อุปกรณ์</th>
                        <th className="bg-white border-b  w-[150px]">จำนวน</th>
                      </tr>
                    </thead>
                    <tbody>{/* ข้อมูลอุปกรณ์ */}</tbody>
                  </table>
                </div>
              </div>
              <div className="bg-white rounded shadow p-4 flex flex-col gap-2">
                <div className="flex-1">
                  <button
                    className="btn btn-outline-danger mt-2  w-full"
                    type="button"
                    onClick={() => handleComingSoon("ยกเลิก")}
                  >
                    ยกเลิก
                  </button>
                </div>
                <div className="flex flex-col gap-4 pt-2">
                  <button
                    className="btn btn-outline w-full"
                    type="button"
                    onClick={() => handleComingSoon("พิมพ์เอกสาร")}
                  >
                    พิมพ์เอกสาร
                  </button>
                  <button
                    className="btn btn-outline w-full"
                    type="button"
                    onClick={() => handleComingSoon("รูปถ่าย")}
                  >
                    รูปถ่าย
                  </button>

                  <button
                    className="btn btn-warning w-full py-3"
                    type="button"
                    onClick={() => handleComingSoon("จัดส่ง")}
                  >
                    จัดส่ง
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EquipmentSelectModal
        open={showModal}
        onClose={() => setShowModal(false)}
        equipmentList={equipmentList}
        selected={selectedEquipment}
        onChange={(name, qty) =>
          setSelectedEquipment((prev) => ({ ...prev, [name]: qty }))
        }
        onConfirm={() => {
          // handle save
          setShowModal(false);
        }}
      />
    </MainLayout>
  );
}
