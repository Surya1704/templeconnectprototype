
import React from "react";
import Layout from "../components/Layout";
import TemplePositionEditor from "../components/TemplePositionEditor";

const TemplePositionTool: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-spiritual-maroon">
          Temple Position Editor Tool
        </h1>
        <div className="bg-white rounded-xl shadow-lg p-4">
          <TemplePositionEditor />
        </div>
      </div>
    </Layout>
  );
};

export default TemplePositionTool;
