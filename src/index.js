async function createKey() {
  let credential = await navigator.credentials.create({
    publicKey: {
      challenge: Uint8Array.from({ length: 128 }, () => Math.floor(Math.random() * 256)),
      rp: { id: window.location.hostname },
      user: {
        id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26, 45]),
        name: "jamiedoe",
        displayName: "Jamie Doe",
      },
      pubKeyCredParams: [{ type: "public-key", alg: -7 }]
    }
  });
  console.log(credential);
  document.getElementById("output").innerText += JSON.stringify(credential);
}
const button = document.getElementById("createkey");
button.addEventListener('click', createKey);