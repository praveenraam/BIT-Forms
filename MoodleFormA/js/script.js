async function modifyPdf() {
    // Load the PDF document you want to modify
    var dateValue = $('#m_inputdate').val();
    const parts = dateValue.split("-");
    const day = parseInt(parts[2]);
    const month = parseInt(parts[1]);
    const year_ = parseInt(parts[0]);
    const datem = [day, month].join("     ");
    var date = datem + "        " + year_;
    var name = $('#m_username').val().trim().toUpperCase();
    var rollno = $('#m_rollno').val().trim();
    var department =$('#m_department').val().trim();
    var mail = $('#m_mail').val().trim()
    var reason = $('#reason').val().trim()
    var year = $('#m_year').val().trim()
    if (date === '' || name === '' || rollno === '' || department === '' || mail === '' || reason === '' || year === '') {
      alert('One or more values are missing.');
      return;
}
    var values = {};
    $(' #sc1, #sname1, #sc2, #sname2, #sc3, #sname3, #sc4, #sname4').each(function() {
    values[this.id] = $(this).val();
    });
    if (values['sc1'] === '' && values['sname1'] === '') {
      alert('Provide at least one subject.');
      return;
}
    const existingPdfUrl = '../forms/MoodleFormA.pdf';
    const existingPdfBytes = await fetch(existingPdfUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);

    // Set the page you want to modify
    const page = pdfDoc.getPages()[0];

    // Add text to the page
    const timesnewroman = await pdfDoc.embedFont(PDFLib.StandardFonts.TimesRoman);
    page.drawText(date, { x: 453, y: 648, font: timesnewroman, size: 12 });
    page.drawText(name, { x: 162, y: 612, font: timesnewroman, size: 12 });
    page.drawText(rollno, { x: 162, y: 591, font: timesnewroman, size: 12 });
    page.drawText(department, { x: 162, y: 570, font: timesnewroman, size: 12 });
    page.drawText(year, { x: 162, y: 549, font: timesnewroman, size: 12 });
    page.drawText(mail, { x: 162, y: 530, font: timesnewroman, size: 12 });
    page.drawText(reason, { x: 108, y: 430, font: timesnewroman, size: 12 });
    page.drawText('', { x: 108, y: 408, font: timesnewroman, size: 12 });
    page.drawText('1', { x: 88, y: 321, font: timesnewroman, size: 12 });
    page.drawText('2', { x: 88, y: 293, font: timesnewroman, size: 12 });
    page.drawText('3',{ x: 88, y: 265, font: timesnewroman, size: 12 });
    page.drawText('4', { x: 88, y: 237, font: timesnewroman, size: 12 });
    page.drawText('5', { x: 88, y: 211, font: timesnewroman, size: 12 });
    page.drawText('6', { x: 88, y: 185, font: timesnewroman, size: 12 });
    page.drawText('', { x: 88, y: 158, font: timesnewroman, size: 12 });
    page.drawText('', { x: 88, y: 130, font: timesnewroman, size: 12 });
    page.drawText(values['sc1'], { x: 151, y: 321, font: timesnewroman, size: 12 });
    page.drawText(values['sc2'], { x: 151, y: 293, font: timesnewroman, size: 12 });
    page.drawText(values['sc3'], { x: 151, y: 265, font: timesnewroman, size: 12 });
    page.drawText(values['sc4'], { x: 151, y: 237, font: timesnewroman, size: 12 });
    page.drawText('', { x: 151, y: 211, font: timesnewroman, size: 12 });
    page.drawText('', { x: 151, y: 185, font: timesnewroman, size: 12 });
    page.drawText('', { x: 151, y: 158, font: timesnewroman, size: 12 });
    page.drawText('', { x: 151, y: 130, font: timesnewroman, size: 12 });
    page.drawText(values['sname1'], { x: 250, y: 321, font: timesnewroman, size: 12 });
    page.drawText(values['sname2'], { x: 250, y: 293, font: timesnewroman, size: 12 });
    page.drawText(values['sname3'], { x: 250, y: 265, font: timesnewroman, size: 12 });
    page.drawText(values['sname4'], { x: 250, y: 237, font: timesnewroman, size: 12 });
    page.drawText('', { x: 250, y: 211, font: timesnewroman, size: 12 });
    page.drawText('', { x: 250, y: 185, font: timesnewroman, size: 12 });
    page.drawText('', { x: 250, y: 158, font: timesnewroman, size: 12 });
    page.drawText('', { x: 250, y: 130, font: timesnewroman, size: 12 });

    // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    // document.getElementById('pdf').src = pdfDataUri;

    // Save the modified PDF document
    const modifiedPdfBytes = await pdfDoc.save();

    // Convert the PDF document to a blob
    const modifiedPdfBlob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });

    // Create a download link for the modified PDF and click it to download
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(modifiedPdfBlob);
    downloadLink.download = 'Unblock FA.pdf';
    downloadLink.click();
    }
