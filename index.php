<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>FA Unblock Form</title>
	<!-- Mobile Specific Metas -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<!-- Font-->
	<link rel="stylesheet" type="text/css" href="./css/montserrat-font.css">
	<link rel="stylesheet" type="text/css" href="./fonts/material-design-iconic-font/css/material-design-iconic-font.min.css">
	<!-- Main Style Css -->
    <link rel="stylesheet" href="./css/style.css?v=2"/>
	<link rel="icon" type="image/x-icon" href="../bit-fa.ico">
	<!-- Package For PDF -->
	<script src="https://unpkg.com/pdf-lib"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="./js/main.js"></script>
	<meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>
</head>
<body class="form-v10">
	<div class="page-content">
		<div class="form-v10-content">
			<form class="form-detail" action="#" method="post" id="myform">
				<div class="form-left">
					<h2 class="head">Moodle Unblock Form</h2>
					<div class="form-row">
						<label for="date">Date</label>
						<input id="m_inputdate" type="date" name="date" class="date" placeholder="Date" required>
					</div>
					<div class="form-group">
						<div class="form-row form-row-1">
							<input  id="m_username" type="text" name="name" class="input-text" placeholder="Name" required>
						</div>
						<div class="form-row form-row-2">
							<input id="m_rollno" type="text" name="roll_no" class="input-text" placeholder="Register Number" required>
						</div>
					</div>
					<div class="form-row">
						<input type="email" name="email" id="m_mail" class="input-text" placeholder="Email" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}">
					</div>
					<div class="form-group">
						<div class="form-row form-row-3">
							<select id="m_department" name="title">
								<option value="" class="option">Department</option>
								<option class="option">Aeronautical Engineering</option>
								<option class="option">Agricultural Engineering</option>
								<option class="option">Artificial Intelligence And Data Science</option>
								<option class="option">Artificial Intelligence And Machine Learning</option>
								<option class="option">Automobile Engineering</option>
								<option class="option">Biomedical Engineering</option>
								<option class="option">Biotechnology</option>
								<option class="option">Civil Engineering</option>
								<option class="option">Computer Science And Business Systems</option>
								<option class="option">Computer Science And Design</option>
								<option class="option">Computer Science And Engineering</option>
								<option class="option">Computer Technology</option>
								<option class="option">Electrical And Electronics Engineering</option>
								<option class="option">Electronics And Communication Engineering</option>
								<option class="option">Electronics And Instrumentation Engineering</option>
								<option class="option">Fashion Technology</option>
								<option class="option">Food Technology</option>
								<option class="option">Information Science And Engineering</option>
								<option class="option">Information Technology</option>
								<option class="option">Mechanical Engineering</option>
								<option class="option">Mechatronics</option>
								<option class="option">Textile Technology</option>
							</select>
							<span class="select-btn">
								  <i class="zmdi zmdi-chevron-down"></i>
							</span>
						</div>
						<div class="form-row form-row-4">
							<select id="m_year" name="year">
								<option value="">Year</option>
								<option value="I">I Year</option>
								<option value="II">II Year</option>
								<option value="III">III Year</option>
								<option value="IV">IV Year</option>
							</select>
							<span class="select-btn">
								  <i class="zmdi zmdi-chevron-down"></i>
							</span>
						</div>
						
					</div>
					<div class="form-row">
						<input type="text" name="email" id="reason" class="input-text" placeholder="Reason For FA Block" required>
					</div>
	
					<div class="form-group">
	
						<div class="form-row form-row-3">
							<select id="m_semester" name="semester">
								<option value="">Semester</option>
								<option value="I">I Semester</option>
								<option value="II">II Semester</option>
						
							</select>
							<span class="select-btn">
								  <i class="zmdi zmdi-chevron-down"></i>
							</span>
						</div>
					
						<div class="form-row form-row-2">
							<select id="m_no_subjects" name="title">
								<option value="" class="option">No of Subjects</option>
								<option value="1" class="option">1</option>
								<option value="2" class="option">2</option>
								<option value="3" class="option">3</option>
								<option value="4" class="option">4</option>
								<option value="5" class="option">5</option>
								<option value="6" class="option">6</option>
							</select>
							<span class="select-btn">
								  <i class="zmdi zmdi-chevron-down"></i>
							</span>
						</div>
				</div>
				</div>
				<div class="form-right" >
					<h2>Subject Details</h2>
					<div id="subjects">

						<label class="form-row header" for="s_code">Subject 1</label>
						<div class="form-group">
							<div class="form-row form-row-1">
								<input type="text" name="s_code" id="sc4" class="input-text" placeholder="Subject Code" required>
							</div>
							<div class="form-row form-row-2">
								<input type="text" name="s_name" id="sname4" class="input-text" placeholder="Subject Name" required>
							</div>
						</div>
						<label class="form-row header" for="s_code">Subject 2</label>
						<div class="form-group">
							<div class="form-row form-row-1">
								<input type="text" name="s_code" id="sc4" class="input-text" placeholder="Subject Code" required>
							</div>
							<div class="form-row form-row-2">
								<input type="text" name="s_name" id="sname4" class="input-text" placeholder="Subject Name" required>
							</div>
						</div>
						<label class="form-row header" for="s_code">Subject 3</label>
						<div class="form-group">
							<div class="form-row form-row-1">
								<input type="text" name="s_code" id="sc4" class="input-text" placeholder="Subject Code" required>
							</div>
							<div class="form-row form-row-2">
								<input type="text" name="s_name" id="sname4" class="input-text" placeholder="Subject Name" required>
							</div>
						</div>
						
						<label class="form-row header" for="s_code">Subject 4</label>
						<div class="form-group">
							<div class="form-row form-row-1">
								<input type="text" name="s_code" id="sc4" class="input-text" placeholder="Subject Code" required>
							</div>
							<div class="form-row form-row-2">
								<input type="text" name="s_name" id="sname4" class="input-text" placeholder="Subject Name" required>
							</div>
						</div>
					

					</div>
					<div class="form-row-last">
						<div class="dy-display">
							<input type="button" onclick="GeneratePdf()" name="generate" class="register" value="Generate PDF">
						</div>
						<div class="dy-display">
							<input type="button" onclick="MailPdf()" name="generate" class="register" value="Mail PDF">
						</div>
						
					</div>
				</div>
			</form>
		</div>
	</div>
</body>
</html>
