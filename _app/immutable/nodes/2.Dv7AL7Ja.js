import{s as l,e as n,c as i,l as u,m as h,i as d,n as a,f as c}from"../chunks/scheduler.DNAvik3t.js";import{S as m,i as p}from"../chunks/index.CWoPOsBs.js";import{b as y}from"../chunks/paths.YrUOxdYL.js";function g(o){let e,s=`<div class="p-8 rounded-xl border border-slate-500 bg-slate-800 max-w-3xl w-max"><h1 class="text-4xl pb-3">Get Started</h1> <ol class="list-decimal marker:text-orange-500 text-2xl ps-8"><li class="my-5">Using Libre Hardware Monitor, select <strong>Options</strong> in the menu bar and make sure
				<strong>Log Sensors</strong> is checked. This will start dumping every sensor reading to a log
				file.</li> <li class="my-5">Use your computer in whatever way you wanted to track the performance of, such as running a
				game or benchmark.</li> <li class="my-5">Optionally, save a Hardware Report by selecting <strong>File</strong> then
				<strong>Save Report</strong>. This will help you rename and group your sensors with the
				actual product name.</li> <li class="my-5">In this app, select <strong>Upload</strong> in the menu bar or click
				<a href="${`${y}/upload`}" class="btn btn-default text-lg inline-block">Upload new data</a></li> <li class="my-5">Upload your log file and (optionally) your hardware report. Find the log file (<output>*.csv</output>) in the Libre Hardware Monitor installation folder (probably
				<output>C:\\Program Files\\Libre Hardware Monitor</output>). The log file will be named based
				on the date you ran LHM and you will possibly see multiple files. Find your hardware report
				(<output>LibreHardwareMonitor.Report.txt</output>) in your Documents folder (<output>C:\\Users\\yourname\\Documents</output>)</li> <li class="my-5">Select what sensors you want to view in the chart. Sensors that show the same units (like
				temperature) will be put on the same chart and sensors from the same device will have a
				similar color but different brightness. If you had multiple LHM sessions that day, the app
				will automatically suggest subsets of data to display.</li> <li class="my-5">If you want to share this chart, you need to create an account first. When sharing the
				chart, it will only share the sensors you had selected and the subset of data you selected.
				Once the chart has been uploaded and shared, just send the link to anyone.</li></ol></div>`;return{c(){e=n("div"),e.innerHTML=s,this.h()},l(t){e=i(t,"DIV",{class:!0,"data-svelte-h":!0}),u(e)!=="svelte-1xzx26h"&&(e.innerHTML=s),this.h()},h(){h(e,"class","flex w-full h-full items-center justify-center")},m(t,r){d(t,e,r)},p:a,i:a,o:a,d(t){t&&c(e)}}}class x extends m{constructor(e){super(),p(this,e,null,g,l,{})}}export{x as component};
