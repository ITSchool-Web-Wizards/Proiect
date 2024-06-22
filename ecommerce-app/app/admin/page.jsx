import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { createClient } from "@/utils/supabase/client";
import { formatCurrency, formatNumber } from "@/lib/formatters";

async function getSalesData() {
    const salesData = await fetchSalesData();
    const totalSales = salesData.length;
    const totalAmount = (salesData.reduce((total, sale) => total + sale.price_paid_in_cents, 0) / 100).toFixed(2);
    return { totalSales, totalAmount };
}

async function fetchSalesData() {
    const client = createClient();
    
    let { data: salesData, error } = await client
        .from('order_table')
        .select('price_paid_in_cents');

    await wait(2000)

    if (error) {
        console.error('Error fetching sales data:', error);
        return [];
    }

    return salesData;
}

function wait(duration) {
    return new Promise(resolve => setTimeout(resolve, duration))
}

async function getUserData() {
    const userData = await fetchUserData();
    const totalUsers = userData.length;
    const averageValue = userData.reduce((total, user) => total + user.value, 0) / totalUsers;
    return { totalUsers, averageValue };
}

async function fetchUserData() {
    const client = createClient();
    const { data: userData, error } = await client
        .from('order_table')
        .select('id');

    if (error) {
        console.error('Error fetching user data:', error);
        return [];
    }

    return userData;
}

async function getProductsData() {
    const productData = await fetchProductData();
    const activeProducts = productData.filter(product => product.is_available_for_purchase);
    const inactiveProducts = productData.filter(product => !product.is_available_for_purchase);
    return { activeProductsCount: activeProducts.length, inactiveProductsCount: inactiveProducts.length };
}

async function fetchProductData() {
    const client = createClient();
    const { data: productData, error } = await client
        .from('product_table')
        .select('is_available_for_purchase')

    if (error) {
        console.error('Error fetching product data:', error);
        return [];
    }
    return productData;
}


export default async function AdminDashboard() {

    const [salesData, userData, productData] = await Promise.all([getSalesData(), getUserData(), getProductsData()]);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <DashboardCard
                    title="Sales"
                    subtitle={`${formatNumber(salesData.totalSales)} Orders`}
                    body={formatCurrency(salesData.totalAmount)}
                />
                <DashboardCard
                    title="Customers"
                    subtitle={`${formatCurrency(userData.averageValue)} Average Value`}
                    body={formatNumber(userData.totalUsers)}
                />
                <DashboardCard
                    title="Active Products"
                    subtitle={`${formatNumber(productData.inactiveProductsCount)} Inactive Products`}
                    body={formatNumber(productData.activeProductsCount)}
                />
            </div>
        </>
    );
}

function DashboardCard({ title, subtitle, body }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{body}</p>
            </CardContent>
        </Card>
    );
}