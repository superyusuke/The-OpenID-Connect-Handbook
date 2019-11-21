const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

nonce === decodedNonce

  const {
    nonce: decodedNonce,
  } = verifiedToken;

    const verifiedToken = jwt.verify(id_token, signingKey);

      const { id_token } = req.body;

      const signingKey = key.publicKey || key.rsaPublicKey;
        client.getSigningKey(kid, (err, key) => {});

          const client = jwksClient({
            jwksUri: oidcProviderInfo[`jwks_uri`]
          });

          const kid = decodedToken.header.kid;

            const decodedToken = jwt.decode(id_token, { complete: true });






