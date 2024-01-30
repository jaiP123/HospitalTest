class HospitalData {
    constructor() {
      this.localPatients = 0;
      this.outstationPatients = 0;
    }
  
    registrationOfPatients(location) {
      if (location.toLowerCase() === 'bangalore') {
        this.localPatients++;
      } else {
        this.outstationPatients++;
      }
    }
  
    getPercentage() {
      const total = this.localPatients + this.outstationPatients;
      if (total === 0) {
        return 0;
      } else {
        const percentage = (this.outstationPatients / total) * 100;
        return percentage; 
      }
    }
  }
  
  // Create class object 
  const hospitalData = new HospitalData();
  
  // Add sample data 
  hospitalData.registrationOfPatients('Bangalore');
  hospitalData.registrationOfPatients('Outstation');
  hospitalData.registrationOfPatients('Bangalore');
  hospitalData.registrationOfPatients('Bangalore');
  hospitalData.registrationOfPatients('Pune');
  
  const percentage = hospitalData.getPercentage();
  console.log(`Percentage of outstation patients: ${percentage}%`);
  console.log(`Percentage of Banglore patients: ${100 - percentage}%`);
  