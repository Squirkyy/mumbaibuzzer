import {withClerkMiddleware} from "h3-clerk";


export default withClerkMiddleware({
    publishableKey: 'pk_test_ZmluZS1za3lsYXJrLTQyLmNsZXJrLmFjY291bnRzLmRldiQ',
    secretKey: useRuntimeConfig().clerkSecretKey
});
