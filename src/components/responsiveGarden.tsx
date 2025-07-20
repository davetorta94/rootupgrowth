
import { IconCloud } from "@/components/magicui/icon-cloud";
import { brands } from "@/data/data";

export const ResponsiveGarden = () => {
   
  const imageUrls = brands.map((brand) => brand.img);

 return (
     <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background">
        <IconCloud images={ imageUrls } />
    </div>
  );
}


