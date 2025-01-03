function calculateFCFSSeekTime(sequence, headPosition) {
    let totalSeekTime = 0;
    let currentPosition = headPosition;
    eachReqSeekTime = []
    sequence.forEach(request => {
      
      const seekDistance = Math.abs(request - currentPosition);
      eachReqSeekTime.push(seekDistance)
      totalSeekTime += seekDistance;
  
      currentPosition = request;
    });
  
    result = {
      seektimes: eachReqSeekTime,
      total: totalSeekTime
    }
  
    return result;
  }
  
  function calculateSSTFSeekTime(sequence, headPosition) {
    let totalSeekTime = 0;
    let currentPosition = headPosition;
    let remainingRequests = [...sequence];
    let eachReqSeekTime = [];
  
    while (remainingRequests.length > 0) {
      // Find the closest request
      let closestIndex = 0;
      let minSeekDistance = Math.abs(remainingRequests[0] - currentPosition);
  
      for (let i = 1; i < remainingRequests.length; i++) {
        const seekDistance = Math.abs(remainingRequests[i] - currentPosition);
        if (seekDistance < minSeekDistance) {
          minSeekDistance = seekDistance;
          closestIndex = i;
        }
      }
  
      // Move to the closest request
      eachReqSeekTime.push(minSeekDistance);
      totalSeekTime += minSeekDistance;
      currentPosition = remainingRequests[closestIndex];
      remainingRequests.splice(closestIndex, 1);
    }
  
    return { seektimes: eachReqSeekTime, total: totalSeekTime };
  }
  
  function calculateSCANSeekTime(sequence, headPosition, ) {
    let totalSeekTime = 0;
    let currentPosition = headPosition;
    let eachReqSeekTime = [];
    
    // Sort the requests and split into two parts (left and right of the head)
    const left = sequence.filter(request => request < currentPosition).sort((a, b) => b - a);
    const right = sequence.filter(request => request >= currentPosition).sort((a, b) => a - b);
  
    const scanOrder = direction === "right"
      ? [...right, ...left]
      : [...left.reverse(), ...right];
    
    scanOrder.forEach(request => {
      const seekDistance = Math.abs(request - currentPosition);
      eachReqSeekTime.push(seekDistance);
      totalSeekTime += seekDistance;
      currentPosition = request;
    });
  
    return { seektimes: eachReqSeekTime, total: totalSeekTime };
  }
  
  function calculateCSCANSeekTime(sequence, headPosition){
    let totalSeekTime = 0;
    let currentPosition = headPosition;
    let eachReqSeekTime = [];
  
    // Sort the requests and split into two parts (left and right of the head)
    const left = sequence.filter(request => request < currentPosition).sort((a, b) => b - a);
    const right = sequence.filter(request => request >= currentPosition).sort((a, b) => a - b);
  
    const cscanOrder = direction === "right"
      ? [...right, ...left.reverse()]
      : [...left.reverse(), ...right];
  
    cscanOrder.forEach(request => {
      const seekDistance = Math.abs(request - currentPosition);
      eachReqSeekTime.push(seekDistance);
      totalSeekTime += seekDistance;
      currentPosition = request;
    });
  
    return { seektimes: eachReqSeekTime, total: totalSeekTime };
  }
  
  function calculateLOOKSeekTime(sequence, headPosition, direction ) {
    let totalSeekTime = 0;
    let currentPosition = headPosition;
    let eachReqSeekTime = [];
  
    // Sort requests into two parts based on the head position
    const left = sequence.filter(request => request < currentPosition).sort((a, b) => b - a);
    const right = sequence.filter(request => request >= currentPosition).sort((a, b) => a - b);
  
    // Determine the service order based on the direction
    const lookOrder = direction === "right" ? [...right, ...left] : [...left, ...right];
  
    lookOrder.forEach(request => {
      const seekDistance = Math.abs(request - currentPosition);
      eachReqSeekTime.push(seekDistance);
      totalSeekTime += seekDistance;
      currentPosition = request;
    });
  
    return { seektimes: eachReqSeekTime, total: totalSeekTime };
  }
  
  function calculateCLOOKSeekTime(sequence, headPosition, direction ) {
    let totalSeekTime = 0;
    let currentPosition = headPosition;
    let eachReqSeekTime = [];
  
    // Sort requests into two parts based on the head position
    const left = sequence.filter(request => request < currentPosition).sort((a, b) => b - a);
    const right = sequence.filter(request => request >= currentPosition).sort((a, b) => a - b);
  
    // Determine the service order based on the direction
    const clookOrder = direction === "right" ? [...right, ...left.reverse()] : [...left, ...right.reverse()];
  
    clookOrder.forEach(request => {
      const seekDistance = Math.abs(request - currentPosition);
      eachReqSeekTime.push(seekDistance);
      totalSeekTime += seekDistance;
      currentPosition = request;
    });
  
    return { seektimes: eachReqSeekTime, total: totalSeekTime };
  }
  
  
  function GraphGenerator() {
  
    sequence = document.getElementById("Sequence").value
    head_pos = parseInt(document.getElementById("head_position").value,10)
    dir = document.getElementById("direction").value
  
    if(!sequence || !head_pos || !dir){
      console.log("provide proper inputs.")
      showAlert(); // This will trigger and show the alert box
      return
    }
    else{
      HideAlert();
    }
  
    seqStr = sequence.split(/\s*,\s*/);
    seq = seqStr.map(i => parseInt(i,10))
    console.log(seq, "--",typeof(head_pos))
  
    fcfs = calculateFCFSSeekTime(seq,head_pos)
    sstf = calculateSSTFSeekTime(seq,head_pos)
    scan = calculateSCANSeekTime(seq,head_pos,dir)
    cScan = calculateCSCANSeekTime(seq,head_pos,dir)
    look = calculateLOOKSeekTime(seq,head_pos,dir)
    cLook = calculateCLOOKSeekTime(seq,head_pos,dir)
  
    spanChart1 = document.getElementById("fcfs") 
    spanChart2 = document.getElementById("sstf")
    spanChart3 = document.getElementById("scan")
    spanChart4 = document.getElementById("cScan")
    spanChart5 = document.getElementById("look")
    spanChart6 = document.getElementById("cLook")
  
    spanChart1.innerText = fcfs.total
    spanChart2.innerText = sstf.total
    spanChart3.innerText = scan.total
    spanChart4.innerText = cScan.total
    spanChart5.innerText = look.total 
    spanChart6.innerText = cLook.total
  
    console.log("scan:",scan.seektimes,"cscan:",cScan.seektimes)
  
    labels=[]
    for(i=0;i<seq.length;i++){
      ele = `Request ${i+1}`
      labels.push(ele)
    }
    console.log(labels)
  
    var x = document.getElementById("Grap_container");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
  
      const chartConfigs = [
        {
          elementId: 'chart1',
          label: 'FCFS Seek Times',
          data: fcfs.seektimes,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
        },
        {
          elementId: 'chart2',
          label: 'SSTF Seek Times',
          data: sstf.seektimes,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
        },
        {
          elementId: 'chart3',
          label: 'SCAN Seek Times',
          data: scan.seektimes,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
        },
        {
          elementId: 'chart4',
          label: 'C-SCAN Seek Times',
          data: cScan.seektimes,
          backgroundColor: 'rgba(153, 102, 255, 0.5)',
          borderColor: 'rgba(153, 102, 255, 1)',
        },
        {
          elementId: 'chart5',
          label: 'LOOK Seek Times',
          data: look.seektimes,
          backgroundColor: 'rgba(153, 102, 255, 0.5)',
          borderColor: 'rgba(153, 102, 255, 1)',
        },
        {
          elementId: 'chart6',
          label: 'C-LOOK Seek Times',
          data: cLook.seektimes,
          backgroundColor: 'rgba(153, 102, 255, 0.5)',
          borderColor: 'rgba(153, 102, 255, 1)',
        }
      ];
    
      chartConfigs.forEach(config => {
        const ctx = document.getElementById(config.elementId).getContext('2d');
        console.log("In chart configs"+labels)
        const chart = new Chart(ctx, {
  
          type: 'line', // or 'bar' for a bar chart
          data: {
            labels: seq,
            // labels: labels, // Example processes
            datasets: [{
              label: config.label,
              data: config.data,
              backgroundColor: config.backgroundColor,
              borderColor: config.borderColor,
              borderWidth: 2,
              fill: false,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false, 
            onClick: (event, elements) => {
              if (elements.length > 0) {
                const elementIndex = elements[0].index;
                const label = config.label;
                const value = config.data[elementIndex];
                alert(`${label} - Value: ${value}`);
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Seek Time (ms)'
                }
              },
              x: {
                title: {
                  display: true,
                  text: 'Requests'
                }
              }
            }
          }
        });
      });
      const ctx1 = document.getElementById('chart-total').getContext('2d'); // Single canvas for all lines
  
      const datasets = chartConfigs.map((config) => ({
        label: config.label,
        data: config.data,
        backgroundColor: config.backgroundColor,
        borderColor: config.borderColor,
        borderWidth: 2,
        fill: false,
      }));
      console.log(datasets)
      
      const chart2 = new Chart(ctx1, {
        type: 'line', // Or 'bar' if needed
        data: {
          labels: seq, // x-axis labels, such as processes or time intervals
          datasets: datasets // Use the mapped datasets array
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, 
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Seek Time (ms)',
              }
            },
            x: {
              title: {
                display: true,
                text: 'Requests'
              }
            }
          },
          onClick: (event, elements) => {
            if (elements.length > 0) {
              const elementIndex = elements[0].index;
              const datasetIndex = elements[0].datasetIndex;
              const label = chart.data.datasets[datasetIndex].label;
              const value = chart.data.datasets[datasetIndex].data[elementIndex];
              alert(`${label} - Value: ${value}`);
            }
          }
        }
      });
      
  
  }
    
    
  
  // Function to show the alert
  function showAlert() {
    const alertBox = document.getElementById("alert-2");
    alertBox.style.display = "flex"; // Show the alert by setting display to 'flex' (or 'block')
  }
  
  function HideAlert() {
    const alertBox = document.getElementById("alert-2");
    alertBox.style.display = "none"; // Show the alert by setting display to 'flex' (or 'block')
  }
  
  // Select the close button and add an event listener to hide the alert when clicked
  const alertBox = document.getElementById("alert-2");
  const closeButton = alertBox.querySelector("[data-dismiss-target]");
  
  closeButton.addEventListener("click", function() {
    alertBox.style.display = "none";
  });