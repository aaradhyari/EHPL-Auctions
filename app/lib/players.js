// Updated player pool (Class 11 and Class 12) with all players marked as male
export const DEFAULT_PLAYERS = [
  // Class 11 Players
  { id: "c11-01", name: "MUSTANSIR MAHIR", activity: "FOOTBALL", gender: "male", status: "available" },
  { id: "c11-02", name: "KRISHNA ASWANI", activity: "CRICKET", gender: "male", status: "available" },
  { id: "c11-03", name: "AARAV LAKHWANI", activity: "CRICKET", gender: "male", status: "available" },
  { id: "c11-04", name: "GARVIT SABU", activity: "CRICKET", gender: "male", status: "available" },
  { id: "c11-05", name: "VATAN CHAURASIA", activity: "CRICKET", gender: "male", status: "available" },
  { id: "c11-06", name: "RAKSHWARDHAN SINGH", activity: "BASKETBALL", gender: "male", status: "available" },
  { id: "c11-07", name: "KESHAV MITTAL", activity: "FOOTBALL", gender: "male", status: "available" },
  { id: "c11-08", name: "RAGHAV AGRAWAL", activity: "BADMINTON", gender: "male", status: "available" },
  { id: "c11-09", name: "PRANAV AGRAWAL", activity: "VOLLEYBALL", gender: "male", status: "available" },
  { id: "c11-10", name: "PARTH JAIN", activity: "VOLLEYBALL", gender: "male", status: "available" },
  { id: "c11-11", name: "VIVAAN PODDAR", activity: "TABLE TENNIS", gender: "male", status: "available" },
  { id: "c11-12", name: "PARTH AGRAWAL", activity: "CRICKET", gender: "male", status: "available" },
  { id: "c11-13", name: "SATYAM KAPDI", activity: "FOOTBALL", gender: "male", status: "available" },
  { id: "c11-14", name: "VARNIT GUPTA", activity: "FOOTBALL", gender: "male", status: "available" },
  { id: "c11-15", name: "BHAVYA AGRAWAL", activity: "ATHLETICS", gender: "male", status: "available" },
  { id: "c11-16", name: "ABHISHEK JAIN", activity: "MUSIC", gender: "male", status: "available" },
  { id: "c11-17", name: "LIKHIT AGRAWAL", activity: "CRICKET", gender: "male", status: "available" },
  { id: "c11-18", name: "KARTIK SINGHAL", activity: "GOLF", gender: "male", status: "available" },
  { id: "c11-19", name: "ANMOL AGRAWAL", activity: "TABLE TENNIS", gender: "male", status: "available" },
  { id: "c11-20", name: "VEDANT AGRAWAL", activity: "JUDO", gender: "male", status: "available" },
  { id: "c11-21", name: "SUMESH PATIDAR", activity: "SHOOTING", gender: "male", status: "available" },
  { id: "c11-22", name: "DHRUVIL SONI", activity: "VOLLEYBALL", gender: "male", status: "available" },
  { id: "c11-23", name: "SHREYANSH AGRAWAL", activity: "JUDO", gender: "male", status: "available" },
  { id: "c11-24", name: "ANANT MUNDRA", activity: "CHESS", gender: "male", status: "available" },
  { id: "c11-25", name: "AARAV RANDER", activity: "GOLF", gender: "male", status: "available" },
  { id: "c11-26", name: "ARYAN DAD", activity: "CHESS", gender: "male", status: "available" },
  { id: "c11-27", name: "ANANT GOYAL", activity: "NETBALL", gender: "male", status: "available" },
  { id: "c11-28", name: "YASH JAIN", activity: "VOLLEYBALL", gender: "male", status: "available" },
  { id: "c11-29", name: "GARVIT JAIN", activity: "BASKETBALL", gender: "male", status: "available" },
  { id: "c11-30", name: "SARTHAK BAID", activity: "FOOTBALL", gender: "male", status: "available" },
  { id: "c11-31", name: "ATISH DUBEY", activity: "VOLLEYBALL", gender: "male", status: "available" },
  { id: "c11-32", name: "RAUNAK JAISWAL", activity: "BASKETBALL", gender: "male", status: "available" },
  { id: "c11-33", name: "MANAN GHIYA", activity: "VOLLEYBALL", gender: "male", status: "available" },
  { id: "c11-34", name: "UMANG GOYAL", activity: "CRICKET", gender: "male", status: "available" },
  { id: "c11-35", name: "AKSHAT AGRAWAL", activity: "NETBALL", gender: "male", status: "available" },
  { id: "c11-36", name: "DARSH PATEL", activity: "FOOTBALL", gender: "male", status: "available" },
  { id: "c11-37", name: "VEER KANKARIYA", activity: "CRICKET", gender: "male", status: "available" },
  { id: "c11-38", name: "DIVYAM AGRAWAL", activity: "NETBALL", gender: "male", status: "available" },
  { id: "c11-39", name: "VAIBHAV ATAL", activity: "BASKETBALL", gender: "male", status: "available" },
  { id: "c11-40", name: "YASH AGRAWAL", activity: "NETBALL", gender: "male", status: "available" },
  { id: "c11-41", name: "BHAVESH DAGA", activity: "FOOTBALL", gender: "male", status: "available" },
  { id: "c11-42", name: "VEDANT GOYAL", activity: "NETBALL", gender: "male", status: "available" },
  { id: "c11-43", name: "VANSH AGRAWAL", activity: "SWIMMING", gender: "male", status: "available" },
  { id: "c11-44", name: "VANSH KATHARIA", activity: "ATHLETICS", gender: "male", status: "available" },
  { id: "c11-45", name: "SANIDHYA PATIDAR", activity: "NETBALL", gender: "male", status: "available" },
  { id: "c11-46", name: "PRAGUN BHARTIYA", activity: "TENNIS", gender: "male", status: "available" },
  { id: "c11-47", name: "ARNAV ANAND", activity: "FOOTBALL", gender: "male", status: "available" },
  { id: "c11-48", name: "KABIR GUPTA", activity: "VOLLEYBALL", gender: "male", status: "available" },
  { id: "c11-49", name: "ABHAY SINGH PARIHAR", activity: "BASKETBALL", gender: "male", status: "available" },
  { id: "c11-50", name: "YASH AGRAWAL", activity: "HANDBALL", gender: "male", status: "available" },
  { id: "c11-51", name: "VINAY MOTWANI", activity: "HANDBALL", gender: "male", status: "available" },
  { id: "c11-52", name: "KABIR SHRIVASTAVA", activity: "FOOTBALL", gender: "male", status: "available" },
  { id: "c11-53", name: "SHAURYA RANJAN", activity: "FOOTBALL", gender: "male", status: "available" },
  { id: "c11-54", name: "BHAVYA TOSHNIWAL", activity: "ATHLETICS", gender: "male", status: "available" },
  { id: "c11-55", name: "SRIJAN DHANUKA", activity: "BASKETBALL", gender: "male", status: "available" },
  { id: "c11-56", name: "ANIKET SONI", activity: "VOLLEYBALL", gender: "male", status: "available" },
  { id: "c11-57", name: "VARDHAN TOSHNIWAL", activity: "BASKETBALL", gender: "male", status: "available" },
  { id: "c11-58", name: "ATUL DHINGRA", activity: "HOCKEY", gender: "male", status: "available" },
  { id: "c11-59", name: "MANI SHANKAR SAHU", activity: "HOCKEY", gender: "male", status: "available" },
  { id: "c11-60", name: "ARCHIT GOYAL", activity: "BADMINTON", gender: "male", status: "available" },
  { id: "c11-61", name: "NISHIT SHARDA", activity: "HANDBALL", gender: "male", status: "available" },
  { id: "c11-62", name: "PURAB BHAGAT", activity: "FOOTBALL", gender: "male", status: "available" },
  { id: "c11-63", name: "SATVIK AGRAWAL", activity: "NETBALL", gender: "male", status: "available" },
  { id: "c11-64", name: "ARADHYA SUHANE", activity: "TENNIS", gender: "male", status: "available" },
  { id: "c11-65", name: "PRIYAVRAT SINGH", activity: "SHOOTING", gender: "male", status: "available" },
  { id: "c11-66", name: "DEVANSH JAJOO", activity: "SQUASH", gender: "male", status: "available" },
  { id: "c11-67", name: "CHIRAG KOTHARI", activity: "NETBALL", gender: "male", status: "available" },
  { id: "c11-68", name: "DEVAM ATAL", activity: "TABLE TENNIS", gender: "male", status: "available" },
  { id: "c11-69", name: "SARTHAK ATAL", activity: "CRICKET", gender: "male", status: "available" },
  { id: "c11-70", name: "AKSHAY MANDHAN", activity: "GOLF", gender: "male", status: "available" },
  { id: "c11-71", name: "VANSH KATHURIA", activity: "VOLLEYBALL", gender: "male", status: "available" },
  { id: "c11-72", name: "KRISHNA KEDIA", activity: "TABLE TENNIS", gender: "male", status: "available" },
  { id: "c11-73", name: "ARUSH AGRAWAL", activity: "TAEKWONDO", gender: "male", status: "available" },
  { id: "c11-74", name: "RICHARD FRANKLIN", activity: "FOOTBALL", gender: "male", status: "available" },

  { id: "c11-75", name: "HARSHIL MILAK", activity: "BASKETBALL", gender: "male", status: "available" },
  { id: "c11-76", name: "KARAN DOSHI", activity: "NETBALL", gender: "male", status: "available" },
  { id: "c11-77", name: "YASH PATIDAR", activity: "FOOTBALL", gender: "male", status: "available" },
  { id: "c11-78", name: "TATSAM JAISWAL", activity: "VOLLEYBALL", gender: "male", status: "available" },
  { id: "c11-79", name: "VATSAL AGRAWAL", activity: "HANDBALL", gender: "male", status: "available" },
  { id: "c11-80", name: "RUDRA PRATAP SINGH", activity: "HANDBALL", gender: "male", status: "available" },
  { id: "c11-81", name: "ARYA SONI", activity: "HOCKEY", gender: "male", status: "available" },
  { id: "c11-82", name: "PRINCE TOKE", activity: "SWIMMING", gender: "male", status: "available" },
  { id: "c11-83", name: "PARTH SIKRI", activity: "ATHLETICS", gender: "male", status: "available" },

  { id: "c11-84", name: "BHAVYANSH GERA", activity: "ATHLETICS", gender: "male", status: "available" },
  { id: "c11-85", name: "OMADITYA SINGH", activity: "CRICKET", gender: "male", status: "available" },

  { id: "c11-86", name: "AARAV JAISWAL", activity: "HANDBALL", gender: "male", status: "available" },
  { id: "c11-87", name: "NAMAN JAAT", activity: "SKATING", gender: "male", status: "available" },
  { id: "c11-88", name: "SOUMYA SAND", activity: "SKATING", gender: "male", status: "available" },

  
  { id: "c11-89", name: "ANMOL YADAV", activity: "SWIMMING", gender: "male", status: "available" },
  { id: "c11-90", name: "HARSHVARDHAN SINGH", activity: "ATHLETICS", gender: "male", status: "available" },
  { id: "c11-91", name: "UTKARSH RAJ KATARA", activity: "VOLLEYBALL", gender: "male", status: "available" },
  { id: "c11-92", name: "ANAY SHARMA", activity: "GOLF", gender: "male", status: "available" },

  

  { id: "c11-93", name: "KAVNAV CHAURASIYA", activity: "NETBALL", gender: "male", status: "available" },
  
  { id: "c11-94", name: "RAGHAV MAHEWESHARI", activity: "FOOTBALL", gender: "male", status: "available" },

  { id: "c11-95", name: "REYANSH VERMA", activity: "TAEKWONDO", gender: "male", status: "available" },


  { id: "c11-96", name: "SHIVANSH AGRAWAL", activity: "TABLE TENNIS", gender: "male", status: "available" },
  { id: "c11-97", name: "RAKSH SINGH", activity: "BASKETBALL", gender: "male", status: "available" },

  { id: "c11-98", name: "VANSH KATORIYA", activity: "VOLLEYBALL", gender: "male", status: "available" },
  { id: "c11-99", name: "SHOURYA RANIAN", activity: "FOOTBALL", gender: "male", status: "available" },
  { id: "c11-100", name: "DHANRAI AGRAWAL", activity: "SWIMMING", gender: "male", status: "available" },
  { id: "c11-101", name: "ABDEALI MURAD", activity: "JUDO", gender: "male", status: "available" },
  { id: "c11-102", name: "NAVOL SINGH", activity: "HANDBALL", gender: "male", status: "available" },
  { id: "c11-103", name: "YASH KUMAR AGRAWAL", activity: "SQUASH", gender: "male", status: "available" },


  // Class 12 Players
  { id: "c12-01", name: "AARADHYA RAI", activity: "WALL CLIMBING", gender: "male", prevTeam: "DHRUVA", status: "available" },
  { id: "c12-02", name: "AKSHIT SHARMA", activity: "FOOTBALL", gender: "male", prevTeam: "YODHA", status: "available" },
  { id: "c12-03", name: "AARADHYA GARG", activity: "BASKETBALL", gender: "male", status: "available" },
  { id: "c12-04", name: "ARYAMAN GARG", activity: "BASKETBALL", gender: "male", prevTeam: "RANBHOOMI", status: "available" },
  { id: "c12-05", name: "KARTIK CHAUDHARY", activity: "THROWBALL", gender: "male", prevTeam: "AGNIASTRA", status: "available" },
  { id: "c12-06", name: "KAVYA JAIN", activity: "WALL CLIMBING", gender: "male", prevTeam: "KSHATRIYA", status: "available" },
  { id: "c12-07", name: "NILESH AGRAWAL", activity: "TABLE TENNIS", gender: "male", status: "available" },
  { id: "c12-08", name: "SWAYAM BHERWANI", activity: "BADMINTON", gender: "male", prevTeam: "CHAKRAVYUH", status: "available" },
  { id: "c12-09", name: "YASHMANYA RATHI", activity: "CRICKET", gender: "male", prevTeam: "KURUKSHETRA", status: "available" },
  { id: "c12-10", name: "OJASVA GUPTA", activity: "ATHLETICS", gender: "male", prevTeam: "TRISHUL", status: "available" },
  { id: "c12-11", name: "PUNEET KHEMKA", activity: "TAEKWONDO", gender: "male", status: "available" },
  { id: "c12-12", name: "RANVEER SINGH SISODIYA", activity: "CRICKET", gender: "male", prevTeam: "SHOORVEER", status: "available" },
  { id: "c12-13", name: "SANJAN GOUR", activity: "FOOTBALL", gender: "male", prevTeam: "SHOORVEER", status: "available" },
  { id: "c12-14", name: "VARCHASV JAIN", activity: "SQUASH", gender: "male", status: "available" },
  { id: "c12-15", name: "RUDRAKSH JAJAWARA", activity: "THROWBALL", gender: "male", prevTeam: "RAJTANTRA", status: "available" },
  { id: "c12-16", name: "ANSHUMAN AGRAWAL", activity: "THROWBALL", gender: "male", status: "available" },
  { id: "c12-17", name: "ARPIT AGRAWAL", activity: "TAEKWONDO", gender: "male", status: "available" },
  { id: "c12-18", name: "DEWANK AILANI", activity: "ATHLETICS", gender: "male", status: "available" },
  { id: "c12-19", name: "DIVYANSH JUNEJA", activity: "SQUASH", gender: "male", prevTeam: "RANBHOOMI", status: "available" },
  { id: "c12-20", name: "NAMAN DHANUKA", activity: "TAEKWONDO", gender: "male", status: "available" },
  { id: "c12-21", name: "SHRISH BAJAJ", activity: "HANDBALL", gender: "male", status: "available" },
  { id: "c12-22", name: "SOUMYA AGRAWAL", activity: "JUDO", gender: "male", status: "available" },
  { id: "c12-23", name: "ANSHUMAN SINGH", activity: "BASKETBALL", gender: "male", prevTeam: "YODHA", status: "available" },
  { id: "c12-24", name: "ARNAV AGRAWAL", activity: "TAEKWONDO", gender: "male", prevTeam: "SAMRAT", status: "available" },
  { id: "c12-25", name: "HEMANT VARYANI", activity: "ATHLETICS", gender: "male", prevTeam: "DHRUVA", status: "available" },
  { id: "c12-26", name: "ISHIT MANKANI", activity: "NETBALL", gender: "male", prevTeam: "YODHA", status: "available" },
  { id: "c12-27", name: "KALP TALREJA", activity: "TAEKWONDO", gender: "male", status: "available" },
  { id: "c12-28", name: "KUSHAGRA JAIN", activity: "FOOTBALL", gender: "male", prevTeam: "RAJTANTRA", status: "available" },
  { id: "c12-29", name: "MANTRA TANEJA", activity: "HOCKEY", gender: "male", status: "available" },
  { id: "c12-30", name: "PARSHV JAIN", activity: "FOOTBALL", gender: "male", status: "available" },
  { id: "c12-31", name: "PRABHDEEP SINGH GURON", activity: "TAEKWONDO", gender: "male", prevTeam: "TRISHUL", status: "available" },
  { id: "c12-32", name: "PRADYUMAN AGRAWAL", activity: "BASKETBALL", gender: "male", prevTeam: "BRAHMASTRA", status: "available" },
  { id: "c12-33", name: "LAKSHYAJEET SINGH CHOUHAN", activity: "HANDBALL", gender: "male", prevTeam: "KURUKSHETRA", status: "available" },
  { id: "c12-34", name: "RAGHAV SULTANIA", activity: "CRICKET", gender: "male", prevTeam: "BRAHMASTRA", status: "available" },
  { id: "c12-35", name: "TAKSHVARDHAN SINGH KHICHI", activity: "JUDO", gender: "male", prevTeam: "SHOORVEER", status: "available" },
  { id: "c12-36", name: "VISHESH JAIN", activity: "BASKETBALL", gender: "male", prevTeam: "SAMRAT", status: "available" },
  { id: "c12-37", name: "YUJRAJ KHERODIYA", activity: "FOOTBALL", gender: "male", prevTeam: "KSHATRIYA", status: "available" },
  { id: "c12-38", name: "RISHIT GUPTA", activity: "CHESS", gender: "male", prevTeam: "RAJTANTRA", status: "available" },
  { id: "c12-39", name: "RUDRANSH AGRAWAL", activity: "TABLE TENNIS", gender: "male", prevTeam: "AGNIASTRA", status: "available" },
  { id: "c12-40", name: "RUTRAJ JAIN", activity: "MUSIC", gender: "male", prevTeam: "AGNIASTRA", status: "available" },
    { id: "c12-41", name: "SHOURYA KEDIA", activity: "TAEKWONDO", gender: "male", status: "available" },
  { id: "c12-42", name: "VYOM CHANDAK", activity: "BASKETBALL", gender: "male", prevTeam: "SAMRAT", status: "available" },
  { id: "c12-43", name: "YASH JHUNJHUNWALA", activity: "BASKETBALL", gender: "male", status: "available" },
  { id: "c12-44", name: "ADITYA AGRAWAL", activity: "TABLE TENNIS", gender: "male", status: "available" },
  { id: "c12-45", name: "ADITYA SACHIN AGRAWAL", activity: "GOLF", gender: "male", prevTeam: "DHRUVA", status: "available" },
  { id: "c12-46", name: "DAKSHDITYA SINGH JHALA", activity: "JUDO", gender: "male", prevTeam: "DHRUVA", status: "available" },
  { id: "c12-47", name: "IKSHIT AGRAWAL", activity: "TAEKWONDO", gender: "male", prevTeam: "YODHA", status: "available" },
  { id: "c12-48", name: "OMESHWAR SINGH DANGI", activity: "TAEKWONDO", gender: "male", prevTeam: "RAJTANTRA", status: "available" },
  { id: "c12-49", name: "RIDHAM SINGHAL", activity: "TAEKWONDO", gender: "male", status: "available" },
  { id: "c12-50", name: "SAMYAK AGRAWAL", activity: "JUDO", gender: "male", status: "available" },
  { id: "c12-51", name: "SHUBH JAIN", activity: "BASKETBALL", gender: "male", prevTeam: "RAJTANTRA", status: "available" },
  { id: "c12-52", name: "SIDDHAM NANDECHA", activity: "TENNIS", gender: "male", prevTeam: "SHOORVEER", status: "available" },
  { id: "c12-53", name: "SYED AATIF HUSSAIN", activity: "SQUASH", gender: "male", prevTeam: "RANBHOOMIBHOOMI", status: "available" },
  { id: "c12-54", name: "AARAV JAIN", activity: "ATHLETICS", gender: "male", prevTeam: "YODHA", status: "available" },
  { id: "c12-55", name: "ARTH AGRAWAL", activity: "JUDO", gender: "male", prevTeam: "KURUKSHETRA", status: "available" },
  { id: "c12-56", name: "DAKSH AGRAWAL", activity: "JUDO", gender: "male", prevTeam: "AGNIASTRA", status: "available" },
  { id: "c12-57", name: "MUDIT MAHAJAN", activity: "HANDBALL", gender: "male", prevTeam: "SAMRAT", status: "available" },
  { id: "c12-58", name: "PARV AGRAWAL", activity: "TABLE TENNIS", gender: "male", status: "available" },
  { id: "c12-59", name: "MANAS SONI", activity: "FOOTBALL", gender: "male", prevTeam: "AGNIASTRA", status: "available" },
  { id: "c12-60", name: "SANSKAR JAIN", activity: "THROWBALL", gender: "male", prevTeam: "RANBHOOMI", status: "available" },
  { id: "c12-61", name: "YASHKRITYA MISHRA", activity: "FOOTBALL", gender: "male", status: "available" },
  { id: "c12-62", name: "YATHARTH JAIN", activity: "ATHLETICS", gender: "male", status: "available" },
  { id: "c12-63", name: "YUVRAJ AGRAWAL", activity: "THROWBALL", gender: "male", prevTeam: "KURUKSHETRA", status: "available" },
  { id: "c12-64", name: "AADARSH AGRAWAL", activity: "HANDBALL", gender: "male", prevTeam: "RAJTANTRA", status: "available" },
  { id: "c12-65", name: "ARHAM JAIN", activity: "FOOTBALL", gender: "male", prevTeam: "RANBHOOMI", status: "available" },
  { id: "c12-66", name: "ARYAVEER GOYAL", activity: "HANDBALL", gender: "male", prevTeam: "SAMRAT", status: "available" },
  { id: "c12-67", name: "KESHAV SOMANI", activity: "VOLLEYBALL", gender: "male", prevTeam: "KSHATRIYA", status: "available" },
  { id: "c12-68", name: "RAGHAV PATIDAR", activity: "ATHLETICS", gender: "male", prevTeam: "SAMRAT", status: "available" },

  { id: "c12-69", name: "AAYUSHMAN AGRAWAL", activity: "HOCKEY", gender: "male", prevTeam: "SHOORVEER", status: "available" },
  { id: "c12-70", name: "BHARAT KHATRI", activity: "BADMINTON", gender: "male", status: "available" },
  // Female Players
  { id: "f-01", name: "SAMRIDDHI AGRAWAL", activity: "BASKETBALL", gender: "female", status: "available" },
  { id: "f-02", name: "RAGHAVI KHANDELWAL", activity: "JUDO", gender: "female", status: "available" },
  { id: "f-03", name: "SIDDHI PIPARSANIYA", activity: "WALL CLIMBING", gender: "female", status: "available" },
  { id: "f-15", name: "JIYA JAIN", activity: "SWIMMING", gender: "female", status: "available" },
  { id: "f-05", name: "SAMAIRA SARIN", activity: "SWIMMING", gender: "female", status: "available" },
  { id: "f-06", name: "JANVI YADAV", activity: "BASKETBALL", gender: "female", status: "available" },
  { id: "f-07", name: "AKSHARA SINGH", activity: "VOLLEYBALL", gender: "female", status: "available" },
  { id: "f-08", name: "ASMI HEMNANI", activity: "SWIMMING", gender: "female", status: "available" },
  { id: "f-09", name: "BHAVYA SONI", activity: "SWIMMING", gender: "female", status: "available" },
  { id: "f-10", name: "SURYA TIWARI", activity: "SWIMMING", gender: "female", status: "available" },
  { id: "f-11", name: "DEETYA SINGHANIA", activity: "VOLLEYBALL", gender: "female", status: "available" },
  { id: "f-12", name: "KANAK JAIN", activity: "FOOTBALL", gender: "female", status: "available" },
  { id: "f-13", name: "SIDDHI PATEL", activity: "KARATE", gender: "female", status: "available" },
  { id: "f-14", name: "UNNATI JHAWAR", activity: "SKATING", gender: "female", status: "available" },
  { id: "f-04", name: "JIYA LILANI", activity: "SHOOTING", gender: "female", status: "available" },
  { id: "f-16", name: "KATYAYANI SAKTAWAT", activity: "SQUASH", gender: "female", status: "available" },
  { id: "f-17", name: "NANDINI AGRAWAL", activity: "KARATE", gender: "female", status: "available" },
  { id: "f-18", name: "CHAHAK KHURANA", activity: "SQUASH", gender: "female", status: "available" },
  { id: "f-19", name: "AAVANI AGRAWAL", activity: "THROWBALL", gender: "female", status: "available" },
  { id: "f-20", name: "SAMARADHI SAHEWALA", activity: "ATHLETICS", gender: "female", status: "available" },
  { id: "f-21", name: "VRINDA AGRAWAL", activity: "ATHLETICS", gender: "female", status: "available" },
  { id: "f-22", name: "APEKSHA PORWAL", activity: "SWIMMING", gender: "female", status: "available" },
  { id: "f-23", name: "BHAVYA MISHRA", activity: "JUDO", gender: "female", status: "available" },
  { id: "f-24", name: "ANUSHKA AGRAWAL", activity: "TABLE TENNIS", gender: "female", status: "available" }
];

export const PLAYERS_STORAGE_KEY = "ehpl-auction-players";
export const CURRENT_PLAYER_KEY = "ehpl-auction-current-player";
export const SHOW_TEAMS_KEY = "ehpl-show-teams";

export function getPlayerCategory(playerId) {
  if (playerId?.startsWith("c11")) return "c11";
  if (playerId?.startsWith("c12")) return "c12";
  if (playerId?.startsWith("f-")) return "female";
  return "other";
}

export function getSoldPlayerGroups(players, teamName) {
  const males = players.filter(
    (p) => p.gender === "male" && p.status === "sold" && p.soldTo === teamName
  );
  const c11 = males.filter((p) => getPlayerCategory(p.id) === "c11");
  const c12 = males.filter((p) => getPlayerCategory(p.id) === "c12");

  const female = players.filter(
    (p) => p.gender === "female" && p.status === "sold" && p.soldTo === teamName
  );

  return { c11, c12, female };
}

/**
 * Get base price for a player
 */
export function getBasePrice(player) {
  return player?.unsoldOnce ? 50000 : 20000;
}