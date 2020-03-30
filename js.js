function make_target(negara) {
    var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX1/Rt/ruMK4f5D2lJxKUn4fohA8N+mMTz7uZ7PiJHHRVRbNYDYwGk8Ga",
        negara);
    if (decrypted == "") {
        var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX18lUijng3DTHaztKDKSD0nE3fHYn6J5Wl3UBmDXDXKWd0mNDPAqDD3e",
            negara);
        if (decrypted == "") {
            return "https://twitter.com/imkameriana";
        } else {
            return decrypted.toString(CryptoJS.enc.Utf8);
        }
    } else {
        return decrypted.toString(CryptoJS.enc.Utf8);

    }


}