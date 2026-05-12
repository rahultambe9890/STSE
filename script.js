let studentNameForFile = "";
let seatNoForFile = "";

document
    .getElementById("regForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        const seatNo =
            document.getElementById("seatNoInput").value;

        const mobile =
            document.getElementById("mobile").value;

        const photoFile =
            document.getElementById("photoInput").files[0];

        /* VALIDATION */

        if (seatNo.length < 3) {

            alert("Invalid Seat Number");
            return;
        }

        if (mobile.length !== 10) {

            alert("Mobile number must be 10 digits");
            return;
        }

        if (!photoFile) {

            alert("Please upload student photo");
            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {

            studentNameForFile =
                document.getElementById("name").value;

            seatNoForFile = seatNo;

            /* SET VALUES */

            document.getElementById("tSeat").innerText =
                seatNoForFile;

            document.getElementById("tName").innerText =
                studentNameForFile;

            document.getElementById("tDob").innerText =
                document.getElementById("dob").value;

            document.getElementById("tStd").innerText =
                document.getElementById("standard").value;

            document.getElementById("tSchool").innerText =
                document.getElementById("school").value;

            document.getElementById("tCenter").innerText =
                document.getElementById("center").value;

            document.getElementById("tPhoto").src =
                event.target.result;

            /* SHOW TICKET */

            document.getElementById("formContainer")
                .style.display = "none";

            document.getElementById("hallTicket")
    .style.visibility = "visible";

document.getElementById("hallTicket")
    .style.position = "relative";

document.getElementById("hallTicket")
    .style.left = "0";

            document.getElementById("dlBtn")
                .style.display = "inline-block";

            window.scrollTo(0, 0);
        };

        reader.readAsDataURL(photoFile);
    });

/* DOWNLOAD PDF */

function downloadPDF() {

    const element =
        document.getElementById("hallTicket");

    const fileName =
        studentNameForFile.replace(/\s+/g, "_")
        + "_"
        + seatNoForFile
        + ".pdf";

    const opt = {

        margin: [0, 0, 0, 0],

        filename: fileName,

        image: {
            type: "jpeg",
            quality: 1
        },

        html2canvas: {

            scale: 2,

            useCORS: true,

            letterRendering: true
        },

        jsPDF: {

            unit: "px",

            format: [794, 1123],

            orientation: "portrait"
        }
    };

    html2pdf()
        .from(element)
        .set(opt)
        .save();
}
 
