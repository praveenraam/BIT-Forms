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
    const no_of_subjects = $('#m_no_subjects').val();
    
    if (date === '' || name === '' || rollno === '' || department === '' || mail === '' || reason === '' || year === '') {
      alert('Fill the Form.');
      return 0;
    }
    
    var sno = ['', '', '', '', '', ''];
    var subject_code = ['', '', '', '', '', ''];
    var subject_name = ['', '', '', '', '', ''];
    for (let val = 1; val <= no_of_subjects; val++) {
        subject_code[val-1] = $(`#sc${val}`).val();
        subject_name[val-1] = $(`#sname${val}`).val();
        sno[val-1] = `${val}`;
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
    page.drawText(sno[0], { x: 88, y: 321, font: timesnewroman, size: 12 });
    page.drawText(sno[1], { x: 88, y: 293, font: timesnewroman, size: 12 });
    page.drawText(sno[2], { x: 88, y: 265, font: timesnewroman, size: 12 });
    page.drawText(sno[3], { x: 88, y: 237, font: timesnewroman, size: 12 });
    page.drawText(sno[4], { x: 88, y: 211, font: timesnewroman, size: 12 });
    page.drawText(sno[5], { x: 88, y: 185, font: timesnewroman, size: 12 });
    page.drawText('', { x: 88, y: 158, font: timesnewroman, size: 12 });
    page.drawText('', { x: 88, y: 130, font: timesnewroman, size: 12 });
    page.drawText(subject_code[0], { x: 151, y: 321, font: timesnewroman, size: 12 });
    page.drawText(subject_code[1], { x: 151, y: 293, font: timesnewroman, size: 12 });
    page.drawText(subject_code[2], { x: 151, y: 265, font: timesnewroman, size: 12 });
    page.drawText(subject_code[3], { x: 151, y: 237, font: timesnewroman, size: 12 });
    page.drawText(subject_code[4], { x: 151, y: 211, font: timesnewroman, size: 12 });
    page.drawText(subject_code[5], { x: 151, y: 185, font: timesnewroman, size: 12 });
    page.drawText('', { x: 151, y: 158, font: timesnewroman, size: 12 });
    page.drawText('', { x: 151, y: 130, font: timesnewroman, size: 12 });
    page.drawText(subject_name[0], { x: 256, y: 321, font: timesnewroman, size: 12 });
    page.drawText(subject_name[1], { x: 256, y: 293, font: timesnewroman, size: 12 });
    page.drawText(subject_name[2], { x: 256, y: 265, font: timesnewroman, size: 12 });
    page.drawText(subject_name[3], { x: 256, y: 237, font: timesnewroman, size: 12 });
    page.drawText(subject_name[4], { x: 256, y: 211, font: timesnewroman, size: 12 });
    page.drawText(subject_name[5], { x: 256, y: 185, font: timesnewroman, size: 12 });
    page.drawText('', { x: 256, y: 158, font: timesnewroman, size: 12 });
    page.drawText('', { x: 256, y: 130, font: timesnewroman, size: 12 });
  
    // Save the modified PDF
    const pdfBytes = await pdfDoc.save();
    const modifiedPdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(modifiedPdfBlob);
    downloadLink.download = `FA Subject Unlock Form - ${rollno}.pdf`;
    downloadLink.click();
    return 1;
}

  $(document).ready(function() {
    const departmentSelect = document.getElementById('m_department');
	const yearSelect = document.getElementById('m_year');
	const semesterSelect = document.getElementById('m_semester');
	const noSubjectsSelect = document.getElementById('m_no_subjects');
	// Disable the year, semester, and noSubjects select elements initially
	yearSelect.disabled = true;
	semesterSelect.disabled = true;
	noSubjectsSelect.disabled = true;

	// Add an event listener to the department select element
	departmentSelect.addEventListener('change', () => {
	// Enable the year select element if a department is selected
	yearSelect.disabled = departmentSelect.value === '';
	yearSelect.addEventListener('change', () => {
		// Enable the semester and noSubjects select elements if a year is selected
		semesterSelect.disabled = yearSelect.value === '';
		semesterSelect.addEventListener('change', () => {
		// Enable the semester and noSubjects select elements if a year is selected
		noSubjectsSelect.disabled = yearSelect.value === '';
		noSubjectsSelect.addEventListener('change', () => {
			// Get a reference to the select element
		var selectElement = $('#m_no_subjects').val();
		console.log(selectElement);
		$('#subjects').empty();
			for (let num = 1; num <= selectElement; num++) {
				$('#subjects').append(`
				<label class="form-row header" for="s_code">Subject ${num}</label>
						<div class="form-group">
							<div class="form-row form-row-1">
								<input type="text" name="s_code" id="sc${num}" class="input-text" placeholder="Subject Code" required>
							</div>
							<div class="form-row form-row-2">
								<input type="text" name="s_name" id="sname${num}" class="input-text" placeholder="Subject Name" required>
							</div>
						</div>
						
				`);
			}

		});
		});
	});
	});

  });
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