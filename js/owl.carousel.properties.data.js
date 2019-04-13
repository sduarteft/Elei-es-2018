var options = {
	target: '.owl-properties', // Class or ID
	props: {
		canta: {
			context: '<p>Reforma Trabalhista</p><img src="imgs/carteira.jpg" class="img-responsive">', // Text or HTML
			initialState: false,
		},

		dança: {
			context: '<p class="dilma-txt">Impeachment de Dilma</p><img src="imgs/dilma.jpg" class="img-responsive">', // Text or HTML
			initialState: false,
		},

		joga: {
			context: '<p>App de Transportes</p><img src="imgs/app.jpg" class="img-responsive">', // Text or HTML
			initialState: false,
		},


		atua: {
			context: '<p>Cadastro Positivo</p><img src="imgs/cadastro.jpg" class="img-responsive" >', // Text or HTML
			initialState: false,
		},


		sapateia: {
			context: '<p>Teto dos Gastos </p><img src="imgs/teto.jpg" class="img-responsive">', // Text or HTML
			initialState: false,
			
		},
	}
};

var data = [
	{
		content: '<img src="imgs/vitorvalim.png">',
		title: 'Vitor Valim (Pros)', 
		description: 'Aos 40 anos, está em sua primeira legislatura. Esteve presente em 92,1% das sessões deliberativas da Câmara Federal. Foi um dos que votou a favor do impeachment de Dilma Rousseff.', 
		props: {canta: true, dança: true, sapateia: false, atua:true}
	},
	
	{
		content: '<img src="imgs/joseguimaraes.png">',
		title: 'José Guimarães (PT)', 
		description: 'O petista cearense, de 59 anos, esteve em 89,3% das 391 sessões deliberativas realizadas de 2015 até agora. Respondeu e foi inocentado do processo que ficou conhecido pelo “Escândalo da Cueca”. Está em sua segundo mandato federal.', 
		props: {canta: true, dança: false, sapateia: false}
	},				
	{
		content: '<img src="imgs/genecias.png">',
		title: 'Genecias Oliveira (Pros)', 
		description: 'Esteve em 70,1% das sessões deliberativas realizadas de 2015 até agora. Em 2016, o TJCE suspendeu os direitos políticos por suposta improbidade administrativa na contratação de 2,6 mil servidores sem concurso público quando prefeito de Parambu. Ele recorreu da decisão.', 
		props: {canta: true, dança: false, sapateia: true, joga:true}
	},
	
];