async function createKey() {
  let credential = await navigator.credentials.create({
    publicKey: {
      challenge: new Uint8Array([117, 61, 252, 231, 191, 241, 222]),
      rp: { id: window.location.hostname, name: "ACME Corporation" },
      user: {
        id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26, 45]),
        name: "jamiedoe",
        displayName: "Jamie Doe",
      },
      pubKeyCredParams: [{ type: "public-key", alg: -7 }]
    }
  });
}
const button = document.getElementById("createkey");
button.addEventListener('click', createKey);