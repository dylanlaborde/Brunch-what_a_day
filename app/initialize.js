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
	let mois = parseInt(document.getElementById('selectMois').value,10)
	const hide = "none"
	const show = "block"
	let value = undefined
	let	max = undefined
	let	mtMax = undefined


	document.getElementById("message").style.display = hide
	let time = undefined
	



	
	let watcher =()=>{

		valider.addEventListener("click",()=>{
	    mois = parseInt(document.getElementById('selectMois').value,10)

	    // let time = moment().year(an).month(parseInt(mois,10)).date(jours)
	    // console.log(moment().date(jours).month(mois).year(an).format("llll"))
			// recuperation du temps

			condition()

		})

		idDays.addEventListener("change",()=>{
			jours = document.getElementById("userInputDays").value

			console.log("changement jours")
			
		})

		idYears.addEventListener("change",()=>{
			an = document.getElementById("userInputYears").value
			
		})

		idMois.addEventListener("change",()=>{
			
			mois = document.getElementById('selectMois').value

		})
		idReset.addEventListener("click",()=>{
			restart()
			
		})

	}

	let check = ()=>{

			let userdate = moment([jours,mois,an],"DD-MM-YYYY")
			let time = userdate.format("dddd")
			let veriftime = userdate.format("llll")
			console.log(veriftime)
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
	}

	let remove = ()=>{

		document.getElementById("msgOverlay").innerHTML = ""
		document.getElementById("overlay").style.display = hide
	}
	let resetvalue = ()=>{
		jours = undefined
	an = undefined
	userdate = undefined
	date = undefined
	document.getElementById("userInputYears").value = ""
	}

	let restart = ()=>{
		document.getElementById("main").style.display = show 
		document.getElementById("msgOverlay").innerHTML = ""
		document.getElementById("overlay").style.display = hide
		document.getElementById("userInputDays").value = ""
		// condition()
		resetvalue()
	}
	let condition = ()=>{
		userdate = moment([jours,mois,an],"DD-MM-YYYY")
		time = userdate.format("dddd")
		console.log(time)
		
		if (jours === undefined && an === undefined) {
			conditionUndefined()
		}
		else if (date === "Invalid date") {
			// coonditionInvalide()
		}
		else if (jours > 31) {
			 conditionWrong()
		}
		else {
			check()
			console.log("c'est ok ")
		}


	}

	let conditionUndefined = ()=>{
		document.getElementById("userInputDays").style.border = "2px solid #ff7473"
		document.getElementById("userInputYears").style.border = "2px solid #ff7473"
		document.getElementById("message").style.display = show
		document.getElementById("msg").innerHTML = ""
		document.getElementById("msg").innerHTML = "Erreur aucune valeur n'a été renseigné"
		document.getElementById("main").style.display = show
		document.getElementById("overlay").style.display = hide

	}
	
	let conditionWrong = ()=>{
		document.getElementById("userInputDays").style.border = "2px solid #ff7473"
		document.getElementById("message").style.display = show
		document.getElementById("msg").innerHTML = ""
		document.getElementById("msg").innerHTML = "Le jour doit etre compris en 1 et 31 "
		document.getElementById("main").style.display = show
		document.getElementById("overlay").style.display = hide
	}
	
	// let conditionDays = ()=>{
	// 	document.getElementById("userInputDays").style.border = "2px solid #ff7473" 
	// 	document.getElementById("main").style.display = show 
	// 	document.getElementById("overlay").style.display = hide
	// 	document.getElementById("msgOverlay").innerHTML = ""



	// }
	// let conditionYears = ()=>{
	// 	document.getElementById("userInputYears").style.border = "2px solid #ff7473" 
	// 	document.getElementById("main").style.display = show 
	// 	document.getElementById("overlay").style.display = hide
	// 	document.getElementById("msgOverlay").innerHTML = ""
	// 	document.getElementById("msg").innerHTML = ""
	// 	document.getElementById("message").style.display = show 
	// 	document.getElementById("msg").innerHTML = "Renseigner l'année !"

		
	// }
	
	remove()
	watcher()
// console.log(moment().year(2012).month(11).date(21).format("ll")) 

});




