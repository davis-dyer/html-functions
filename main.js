//Starter Code
<section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section>


const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const apple = (computerObj) => {
    const appleHTML = `
    <section id="computer--${computerObj.id}">
        <h1>${computerObj.manufacturer} ${computerObj.make}</h1>
    </section>
    `
    return appleHTML;
}

let htmlForUse = apple(computer);
console.log(htmlForUse);
