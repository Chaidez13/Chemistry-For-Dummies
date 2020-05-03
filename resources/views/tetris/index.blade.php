<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<script src="{{ asset('js/jquery.js')}}"></script>
		<script src="{{ asset('js/processing.js')}}"></script>
		<script src="{{ asset('js/TetrisConector.js')}}"></script>
		<script src="{{ asset('js/sound.js')}}"></script>
		<meta name="csrf-token" content="{{ csrf_token() }}">
	</head>
	<body>		
		 <canvas width="1261" height="1000" data-processing-sources="tetris.pde Elemento.pde menu.pde logro.pde"></canvas>
	</body>
</html>
