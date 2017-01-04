document.addEventListener('DOMContentLoaded', () => {

	let jours = undefined
	let an = undefined
	let userdate = undefined
	let date = undefined
	let valider = document.getElementById("btCheck")
	let idDays = document.getElementById("userInputDays")
	let idYears = document.getElementById("userInputYears")
	let idMois = document.getElementById("selectMois")
	let idReset = document.getElementById("restart")
	let mois = document.getElementById('selectMois').value
	const hide = "none"
	const show = "block"
	document.getElementById("message").style.display = hide
	let watcher =()=>{
		valider.addEventListener("click",()=>{
			// recuperation du temps
			let userdate = moment([jours,mois,an],"DD-MM-YYYY")
			let time = userdate.format("dddd")
			let veriftime = userdate.format("llll")
			console.log(time)
			console.log(veriftime)
			console.log("ok")
			// affichage resultat
			document.getElementById("msgOverlay").innerHTML = time
			// hide element main
			document.getElementById("main").style.display = hide
			// afficher overlay
			document.getElementById("overlay").style.display = show
			// cacher message d'erreur
			document.getElementById("message").style.display = hide
			// resedefinition des couleur des input
			document.getElementById("userInputDays").style.border = "2px solid #47b8e0"
			document.getElementById("userInputYears").style.border = "2px solid #47b8e0" 
			// 




		})
		idDays.addEventListener("change",()=>{
			jours = document.getElementById("userInputDays").value
			
			console.log("changement jours")
		})
		idYears.addEventListener("change",()=>{
			an = document.getElementById("userInputYears").value
			console.log("changement an")
		})
		idMois.addEventListener("change",()=>{
			console.log("changement mois")
			mois = document.getElementById('selectMois').value
			
		})
		idReset.addEventListener("click",()=>{
			restart()
			console.log("reset")
		})

	}

	let remove = ()=>{

		document.getElementById("msgOverlay").innerHTML = ""
		document.getElementById("overlay").style.display = hide

		console.log(hide)
	}

	let restart = ()=>{
		document.getElementById("main").style.display = show 
		document.getElementById("msgOverlay").innerHTML = ""
		document.getElementById("overlay").style.display = hide
		document.getElementById("userInputDays").value = ""

	}


	let conditionDays = ()=>{

		

	}
	let conditionYears = ()=>{
		document.getElementById("userInputYears").style.border = "2px solid #ff7473" 
		document.getElementById("main").style.display = show 
		document.getElementById("overlay").style.display = hide
		document.getElementById("msgOverlay").innerHTML = ""
		document.getElementById("msg").innerHTML = ""
		document.getElementById("message").style.display = show 
		document.getElementById("msg").innerHTML = "Renseigner l'année !"

		
	}

	remove()
	watcher()

});



