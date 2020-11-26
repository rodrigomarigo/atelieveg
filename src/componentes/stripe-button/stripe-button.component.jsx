import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HrgqbFU5sqc52BBIplZLw6lwYYz5eWCEy21ShfySlDgvHUSXYPz8Jm0gKm0NZvoOB2yjfAirKRErYFDcYamuEYX00pXHtz09Y'

    const onToken = token => {
        alert('Pago com sucesso')
    }

    return (
        <StripeCheckout
            label = 'Pagar agora'
            name='atelieveg'
            billingAddress
            shippingAddress
            description={`Seu pedido ficou R$${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;