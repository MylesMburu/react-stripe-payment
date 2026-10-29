import axios from "axios";

export default function CheckoutButton() {

    async function handleCheckout() {

        try {

            const response = await axios.post(
                "http://localhost:5000/api/create-checkout-session"
            );

            window.location.href = response.data.url;

        } catch (error) {

            console.log(error);

        }

    }

    return (
        <button className="btn btn--primary" onClick={handleCheckout}>
            Pay Now
        </button>
    );
}