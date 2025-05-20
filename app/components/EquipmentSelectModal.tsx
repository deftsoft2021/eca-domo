import React from "react";

type Equipment = {
  name: string;
  stock: number;
  wms: number;
  image?: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  equipmentList: Equipment[];
  selected: Record<string, number>;
  onChange: (name: string, qty: number) => void;
  onConfirm: () => void;
};

export default function EquipmentSelectModal({
  open,
  onClose,
  equipmentList,
  selected,
  onChange,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg w-[900px] max-w-full max-h-[90vh] flex flex-col p-6 relative overflow-hidden">
        <button
          className="absolute top-4 right-4 text-red-500 text-2xl"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-bold text-center mb-4">ยืนยันเอกสารส่งอุปกรณ์</h2>
        <div className="flex gap-4 h-[60vh]">
          {/* ซ้าย: ตารางเลือก BOL/Load Manifest (mockup) */}
          <div className="flex-1 bg-white rounded border p-2 flex flex-col gap-2 overflow-auto">
            {/* ตัวอย่าง mockup ตาราง */}
            <div className="bg-blue-700 text-white font-bold rounded-t px-2 py-1 flex">
              <div className="w-1/3">เลขที่เอกสาร</div>
              <div className="w-1/3">Trip No</div>
              <div className="w-1/3">รหัสสาขา</div>
            </div>
            <div className="flex">
              <div className="w-1/3 bg-yellow-100 px-2 py-1">ECA250430-00001</div>
              <div className="w-1/3 bg-yellow-100 px-2 py-1">12345678</div>
              <div className="w-1/3 bg-yellow-100 px-2 py-1">5050</div>
            </div>
            <div className="flex">
              <div className="w-1/3 bg-gray-100 px-2 py-1">ECA250430-00002</div>
              <div className="w-1/3 bg-gray-100 px-2 py-1">12345678</div>
              <div className="w-1/3 bg-gray-100 px-2 py-1">5060</div>
            </div>
            {/* ... เพิ่มตารางอื่น ๆ ตามต้องการ ... */}
            <div className="flex-1"></div>
            <button className="btn btn-primary mt-2">เพิ่มบิล</button>
          </div>
          {/* ขวา: เลือกอุปกรณ์ */}
          <div className="w-[350px] bg-white rounded border p-2 flex flex-col gap-2 overflow-auto">
            {equipmentList.map((eq, idx) => (
              <div key={eq.name} className="flex items-center gap-2 border-b py-2">
                <img
                  src={eq.image || "/no-image.png"}
                  alt={eq.name}
                  className="w-14 h-14 object-contain rounded bg-gray-100"
                />
                <div className="flex-1">
                  <div className="font-bold">{eq.name}</div>
                  <div className="text-xs text-gray-500">สต็อก <span className="font-bold">{eq.stock}</span></div>
                  <div className="text-xs text-gray-500">WMS <span className="font-bold">{eq.wms}</span></div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="btn btn-outline px-2 py-1"
                    onClick={() => onChange(eq.name, Math.max((selected[eq.name] || 0) - 1, 0))}
                  >-</button>
                  <input
                    type="number"
                    className="input w-12 text-center"
                    value={selected[eq.name] || 0}
                    min={0}
                    max={eq.stock}
                    onChange={e => onChange(eq.name, Math.max(Number(e.target.value), 0))}
                  />
                  <button
                    type="button"
                    className="btn btn-outline px-2 py-1"
                    onClick={() => onChange(eq.name, Math.min((selected[eq.name] || 0) + 1, eq.stock))}
                  >+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="btn btn-primary" onClick={onConfirm}>
            ยืนยันเอกสารส่งอุปกรณ์
          </button>
        </div>
      </div>
    </div>
  );
}