// write a java code which will take 5 products name and price.
// and print the total price of all the products.
// if the total price is more than 5000 then give 10% discount
// if the total price is more than 10000 then give 20% discount
// if the total price is more than 20000 then give 30% discount
// if the total price is more than 30000 then give 40% discount
// if the total price is more than 40000 then give 50% discount
// if the total price is more than 50000 then give 60% discount

// write a java code which will take 5 products name and price.
// and print the total price of all the products.


// generate from copilot 

class Main {
    public static void main() {
        String[] products = {"A", "B", "C", "D", "E"};
        int[] prices = {1000, 2000, 3000, 4000, 5000};
        int total = 0;
        for (int i = 0; i < prices.length; i++) {
            total += prices[i];
        }
        System.out.println("Total price: " + total);
    }
}