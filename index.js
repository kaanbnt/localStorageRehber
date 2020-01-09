var kisiList = [];
function Proccess() {

    var adi = document.getElementById("adi").value;
    var telNo = document.getElementById("telNo").value;
    var email = document.getElementById("email").value;

    if (adi != "" || telNo != "" || email != "") {
        var kisi = { adi, telNo, email };
        kisiList.push(kisi);
        localStorage.setItem("user", JSON.stringify(kisiList));
        $("#listele").empty();
        for (var i = 0; i < kisiList.length; i++) {
            var tr = "<tr>";
            tr += "<td>" + kisiList[i].adi + "</td>";
            tr += "<td>" + kisiList[i].telNo + "</td>";
            tr += "<td>" + kisiList[i].email + "</td>";
            tr += "</tr>";
            $("#listele").append(tr);
        }
    }
    alert("Kullanıcı Kaydedildi");
}
