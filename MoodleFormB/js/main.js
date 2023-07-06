async function GeneratePdf() {
    // Load the PDF document you want to modify
    const dateValue = $('#m_inputdate').val();
    const parts = dateValue.split("-");
    const day = parseInt(parts[2]);
    const month = parseInt(parts[1]);
    const year_ = parseInt(parts[0]);
    const datem = [day, month].join("     ");
    const date = datem + "        " + year_;
    const name = $('#m_username').val().trim().toUpperCase();
    const rollno = $('#m_rollno').val().trim();
    const department = $('#m_department').val().trim();
    const mail = $('#m_mail').val().trim();
    const reason = $('#reason').val().trim();
    const year = $('#m_year').val().trim();
    
    if (date === '' || name === '' || rollno === '' || department === '' || mail === '' || reason === '' || year === '') {
      alert('Fill the Form.');
      return 0;
    }
    
    var sno = ['', '', '', '', '', ''];
    var subject_code = ['', '', '', '', '', ''];
    var subject_name = ['', '', '', '', '', ''];
    for (let val = 1; val <= 6; val++) {
        subject_code[val-1] = $(`#sc${val}`).val();
        subject_name[val-1] = $(`#sname${val}`).val();
        sno[val-1] = `${val}`;
    }
    
    const existingPdfUrl = '../forms/MoodleFormB.pdf';
    const existingPdfBytes = await fetch(existingPdfUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);
  
    // Set the page you want to modify
    const page = pdfDoc.getPages()[0];
  
    // Add text to the page
    const timesnewroman = await pdfDoc.embedFont(PDFLib.StandardFonts.TimesRoman);
        page.drawText(date, { x: 453, y: 659, font: timesnewroman, size: 12 });
        page.drawText(name, { x: 162, y: 623, font: timesnewroman, size: 12 });
        page.drawText(rollno, { x: 162, y: 602, font: timesnewroman, size: 12 });
        page.drawText(department, { x: 162, y: 581, font: timesnewroman, size: 12 });
        page.drawText(year, { x: 162, y: 560, font: timesnewroman, size: 12 });
        page.drawText(mail, { x: 162, y: 541, font: timesnewroman, size: 12 });
        page.drawText(reason, { x: 108, y: 441, font: timesnewroman, size: 12 });
        page.drawText('', { x: 108, y: 419, font: timesnewroman, size: 12 });
        page.drawText(sno[0], { x: 88, y: 335, font: timesnewroman, size: 12 });
        page.drawText(sno[1], { x: 88, y: 304, font: timesnewroman, size: 12 });
        page.drawText(sno[2],{ x: 88, y: 276, font: timesnewroman, size: 12 });
        page.drawText(sno[3], { x: 88, y: 249, font: timesnewroman, size: 12 });
        page.drawText(sno[4], { x: 88, y: 223, font: timesnewroman, size: 12 });
        page.drawText(sno[5], { x: 88, y: 196, font: timesnewroman, size: 12 });
        page.drawText('', { x: 88, y: 158, font: timesnewroman, size: 12 });
        page.drawText('', { x: 88, y: 130, font: timesnewroman, size: 12 });
        page.drawText(subject_code[0], { x: 151, y: 335, font: timesnewroman, size: 12 });
        page.drawText(subject_code[1], { x: 151, y: 304, font: timesnewroman, size: 12 });
        page.drawText(subject_code[2], { x: 151, y: 276, font: timesnewroman, size: 12 });
        page.drawText(subject_code[3], { x: 151, y: 249, font: timesnewroman, size: 12 });
        page.drawText(subject_code[4], { x: 151, y: 223, font: timesnewroman, size: 12 });
        page.drawText(subject_code[5], { x: 151, y: 196, font: timesnewroman, size: 12 });
        page.drawText('', { x: 151, y: 158, font: timesnewroman, size: 12 });
        page.drawText('', { x: 151, y: 130, font: timesnewroman, size: 12 });
        page.drawText(subject_name[0], { x: 250, y: 335, font: timesnewroman, size: 12 });
        page.drawText(subject_name[1], { x: 250, y: 304, font: timesnewroman, size: 12 });
        page.drawText(subject_name[2], { x: 250, y: 276, font: timesnewroman, size: 12 });
        page.drawText(subject_name[3], { x: 250, y: 249, font: timesnewroman, size: 12 });
        page.drawText(subject_name[4], { x: 250, y: 223, font: timesnewroman, size: 12 });
        page.drawText(subject_name[5], { x: 250, y: 196, font: timesnewroman, size: 12 });
        page.drawText('', { x: 250, y: 158, font: timesnewroman, size: 12 });
        page.drawText('', { x: 250, y: 130, font: timesnewroman, size: 12 });
  
    // Save the modified PDF
    const pdfBytes = await pdfDoc.save();
    const modifiedPdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(modifiedPdfBlob);
    downloadLink.download = `Moodle Account Revoke Form - ${rollno}.pdf`;
    downloadLink.click();
    return 1;
}

 
async function MailPdf(){
        var value = await GeneratePdf()
        if  (value === 1){
            setTimeout(mail(), 3000);
        }	
}
function mail(){
       	// Construct the email link with the recipient email, subject, and body
		const recipientEmail = 'Choose_Reciptent';
		const subject = 'Moodle Unblock Form';
		const body = 'Attach The Unblock Form From Downloads.';
		var emailLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
		// Redirect the user to the email link
		window.location.href = emailLink;
}