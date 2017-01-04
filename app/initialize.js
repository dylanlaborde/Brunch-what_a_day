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


	let watcher =()=>{
		valider.addEventListener("click",()=>{
			// recuperation du temps
			let userdate = moment([jours,mois,an],"DD-MM-YYYY")
			let time = userdate.format("dd")
			let veriftime = userdate.format("llll")
			console.log(time)
			console.log(veriftime)
			console.log("ok")
			//

		})
		idDays.addEventListener("change",()=>{
			jours = document.getElementById("userInputDays").value
		// console.log(jours)
		console.log("changement jours")
	})
		idYears.addEventListener("change",()=>{
			an = document.getElementById("userInputYears").value
			console.log("changement an")
		})
		idMois.addEventListener("change",()=>{
			console.log("changement mois")
			mois = document.getElementById('selectMois').value
		// console.log(mois)
	})
		idReset.addEventListener("click",()=>{
			console.log("reset")
		})

	}


	watcher()

});



