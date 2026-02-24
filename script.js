const jobsData = [
  {
    company: "Mobile First Corp",
    title: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    desc: "Build cross-platform mobile applications using React Native."
  },
  {
    company: "WebFlow Agency",
    title: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    desc: "Create stunning web experiences for high-profile clients."
  }
];

const jobsContainer = document.getElementById("jobs");

let interviewCount = 0;
let rejectedCount = 0;

jobsData.forEach((job, index) => {
  jobsContainer.innerHTML += `
    <div class="job-card">
      <div class="job-top">
        <div class="job-info">
          <h3>${job.company}</h3>
          <h2>${job.title}</h2>
          <div class="job-meta">${job.location} • ${job.type} • ${job.salary}</div>
        </div>
        <div class="buttons">
          <button class="applied" onclick="setStatus(${index}, 'Applied')">Applied</button>
          <button class="interview" onclick="setStatus(${index}, 'Interview')">Interview</button>
          <button class="rejected" onclick="setStatus(${index}, 'Rejected')">Rejected</button>
        </div>
      </div>
      <div class="job-desc">${job.desc}</div>
      <span id="status-${index}" class="status">Not Applied</span>
    </div>
  `;
});

function setStatus(index, status) {
  const statusEl = document.getElementById(`status-${index}`);
  statusEl.innerText = status;

  if (status === "Interview") {
    interviewCount++;
    document.getElementById("interviewCount").innerText = interviewCount;
  }

  if (status === "Rejected") {
    rejectedCount++;
    document.getElementById("rejectedCount").innerText = rejectedCount;
  }
}