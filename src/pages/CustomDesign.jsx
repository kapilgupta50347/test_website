import { useState } from "react";
import { Upload, Printer, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export default function CustomDesign() {
  const [file, setFile] = useState(null);
  const [material, setMaterial] = useState("PLA");
  const [color, setColor] = useState("Black");
  const [dimensions, setDimensions] = useState({ width: "", height: "", depth: "" });
  const { toast } = useToast();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      toast({
        title: "File Missing",
        description: "Please upload your 3D model file before submitting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Custom Print Request Sent",
      description: "Your 3D design request has been submitted successfully!",
    });

    setFile(null);
    setDimensions({ width: "", height: "", depth: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] via-[#001F3F]/95 to-[#FFD23F]/20 py-16 px-6 flex items-center justify-center">
      <div className="max-w-3xl w-full glass-effect rounded-2xl shadow-2xl border border-[#FFD23F]/20">
        <Card className="bg-transparent border-none">
          <CardContent className="p-8">
            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-extrabold gradient-text tracking-tight mb-3">
                Upload Your Custom Design
              </h1>
              <p className="text-[#F5F5DC]/80 text-lg">
                Bring your imagination to life with precision 3D printing.
              </p>
            </div>

            {/* Upload Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload */}
              <div className="space-y-2">
                <label className="text-[#FFD23F] font-semibold">3D Model File (.STL, .OBJ)</label>
                <div className="flex items-center gap-3 border border-[#FFD23F]/30 rounded-lg p-4 hover:border-[#FFD23F]/60 transition-all">
                  <Upload className="text-[#FFD23F]" />
                  <Input
                    type="file"
                    accept=".stl,.obj"
                    onChange={handleFileChange}
                    className="bg-transparent text-[#F5F5DC] border-none focus:ring-0"
                  />
                </div>
                {file && (
                  <p className="text-[#F5F5DC]/70 text-sm mt-1">
                    <CheckCircle className="inline mr-1 text-green-400" />
                    {file.name}
                  </p>
                )}
              </div>

              {/* Material */}
              <div className="space-y-2">
                <label className="text-[#FFD23F] font-semibold">Material</label>
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="w-full bg-[#001F3F]/50 border border-[#FFD23F]/30 text-[#F5F5DC] p-3 rounded-lg focus:ring-2 focus:ring-[#FFD23F]"
                >
                  <option value="PLA">PLA (Biodegradable)</option>
                  <option value="ABS">ABS (Durable Plastic)</option>
                  <option value="PETG">PETG (Flexible + Strong)</option>
                  <option value="Resin">Resin (High Detail)</option>
                </select>
              </div>

              {/* Color */}
              <div className="space-y-2">
                <label className="text-[#FFD23F] font-semibold">Color</label>
                <select
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full bg-[#001F3F]/50 border border-[#FFD23F]/30 text-[#F5F5DC] p-3 rounded-lg focus:ring-2 focus:ring-[#FFD23F]"
                >
                  <option value="Black">Black</option>
                  <option value="White">White</option>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="Yellow">Yellow</option>
                </select>
              </div>

              {/* Dimensions */}
              <div className="space-y-2">
                <label className="text-[#FFD23F] font-semibold">Dimensions (in mm)</label>
                <div className="grid grid-cols-3 gap-4">
                  <Input
                    type="number"
                    placeholder="Width"
                    value={dimensions.width}
                    onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
                    className="bg-[#001F3F]/50 border border-[#FFD23F]/30 text-[#F5F5DC] focus:ring-2 focus:ring-[#FFD23F]"
                  />
                  <Input
                    type="number"
                    placeholder="Height"
                    value={dimensions.height}
                    onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
                    className="bg-[#001F3F]/50 border border-[#FFD23F]/30 text-[#F5F5DC] focus:ring-2 focus:ring-[#FFD23F]"
                  />
                  <Input
                    type="number"
                    placeholder="Depth"
                    value={dimensions.depth}
                    onChange={(e) => setDimensions({ ...dimensions, depth: e.target.value })}
                    className="bg-[#001F3F]/50 border border-[#FFD23F]/30 text-[#F5F5DC] focus:ring-2 focus:ring-[#FFD23F]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#001F3F] to-[#FFD23F] hover:from-[#001A35] hover:to-[#FFC300] text-lg py-3 text-[#F5F5DC] font-semibold rounded-xl shadow-md transition-all duration-300"
              >
                Order Custom Print
              </Button>
            </form>

            {/* Info Section */}
            <div className="mt-10 text-center text-[#F5F5DC]/70 text-sm">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Printer className="text-[#FFD23F]" />
                <span>Your model will be reviewed before final print confirmation.</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <AlertCircle className="text-[#FFD23F]" />
                <span>Ensure dimensions and details are accurate for best results.</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inline styles */}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(to right, #001F3F, #FFD23F);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .glass-effect {
          background: rgba(0, 31, 63, 0.4);
          backdrop-filter: blur(12px);
        }
      `}</style>
    </div>
  );
}
