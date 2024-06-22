import { createClient } from "./client";


export async function getMostPopularProducts() {

    const supabase = createClient();

    try {
      const { data, error } = await supabase
        .from('product_table')
        .select('*')
        .limit(10); 
  
      if (error) {
        console.error('Error fetching most popular products:', error);
        return []; 
      }
  
      return data;

    } catch (error) {
      console.error('Unexpected error fetching most popular products:', error);
      return []; 
  }
}
  
  export async function getNewestProducts() {

    const supabase = createClient();

    try {
      const { data: productData, error } = await supabase
        .from('product_table')
        .select('*')
        .order('created_at', { ascending: true }) 
        .limit(10); 
  
      if (error) {
        console.error('Error fetching newest products:', error);
        return []; 
      }
  
      return productData;

    } catch (error) {
      console.error('Unexpected error fetching newest products:', error);
      return [];
    }
  }
