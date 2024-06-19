import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";


function getNewestProducts() {

    const supabase = createClient();

    const { data, error } = supabase
        .from("product_table")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10);

    if (error) {
        console.error("Error fetching newest products:", error);
    }

    return data;

}

function getMostPopularProducts() {

    const supabase = createClient();

    const { data, error } = supabase
        .from("product_table")
        .select("*")
        .order("views", { ascending: false })
        .limit(10);

    if (error) {
        console.error("Error fetching most popular products:", error);
    }

    return data;

}

export default function HomePage() {
    return (
        <main className="space-y-12">
            <ProductGridSection
                title={"Most Popular"}
                productsFetcher={getMostPopularProducts} />
            <ProductGridSection
                title={"Newest Products"}
                productsFetcher={getNewestProducts} />
        </main>
    );
}


async function ProductGridSection({ productsFetcher, title }) {

    

    return (
        <>
            <div className="space-y-4">
                <div className="flex gap-4">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <Button variant="outline" asChild>
                        <Link href="/products" className="space-x-2">
                            <span>View All</span>
                            <ArrowRightIcon className="size-4" />
                        </Link>
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    
                </div>
            </div>
        </>
    );
}
