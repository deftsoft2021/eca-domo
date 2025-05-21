"use client";
import MainLayout from "../layouts/MainLayout";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย."],
  datasets: [
    {
      label: "รับเข้า",
      data: [120, 150, 180, 100, 200, 170],
      backgroundColor: "rgba(34, 197, 94, 0.7)", // green
    },
    {
      label: "ส่งออก",
      data: [80, 100, 140, 90, 160, 120],
      backgroundColor: "rgba(239, 68, 68, 0.7)", // red
    },
    {
      label: "อุปกรณ์คงเหลือ",
      data: [300, 350, 390, 400, 440, 490],
      backgroundColor: "rgba(0, 113, 205, 0.7)", // primary
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "สรุปยอดอุปกรณ์ รับเข้า/ส่งออก/คงเหลือ (รายเดือน)",
      font: {
        size: 18,
      },
    },
  },
};

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-primary mb-6">
          แดชบอร์ด
        </h1>
        <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
          <Bar data={data} options={options} />
        </div>
      </div>
    </MainLayout>
  );
}
