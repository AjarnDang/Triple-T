// Assignment

const assignment = [
    {
      language: "en",
      content: {
        title: "Assignment",
        introduction: "Develop a Tic-Tac-Toe game as a web application with the following requirements:",
        requirements: [
          "The player must log in before starting the game.",
          "Login should be developed according to OAuth 2.0 standards.",
          "The game rules are the same as regular Tic-Tac-Toe (player vs bot).",
          "There should be a scoring system.",
          "If the player wins against the bot, they gain 1 point (and lose 1 point if they lose).",
          "If the player wins 3 times in a row, they earn an additional bonus point, and the win streak counter resets."
        ],
        additionalDetails: {
          title: "Additional Details",
          details: [
            "Developing a custom user system is unnecessary (login can be done via Social Media, Okta, Auth0, etc.).",
            "Mock APIs can be used as needed.",
            "Any tools may be used to help develop the system.",
            "Submit by publishing all files and the documentation to Git and sending the URL to given Email"
          ]
        }
      }
    },
    {
      language: "th",
      content: {
        title: "การบ้าน",
        introduction: "ให้ผู้สมัครทำการพัฒนาเกม OX (Tic-tac-toe) ในรูปแบบของ Web Application โดยมี Requirement ดังต่อไปนี้:",
        requirements: [
          "ผู้เล่นจะต้องเข้าสู่ระบบก่อนเริ่มเล่นเกม",
          "การเข้าสู่ระบบจะต้องพัฒนาตามมาตรฐาน OAuth 2.0",
          "กติกาการเล่นเกมเหมือน OX ทั่วไป (ผู้เล่น vs บอท)",
          "มีระบบเก็บคะแนน",
          "เมื่อผู้เล่นเอาชนะบอทได้ จะได้รับ 1 คะแนน (ถ้าแพ้จะเสีย 1 คะแนน)",
          "ถ้าผู้เล่นเอาชนะบอทได้ 3 ครั้งติดต่อกันจะได้รับคะแนนพิเศษเพิ่มอีก 1 คะแนน และการนับจ านวนครั้งที่ชนะติดต่อกันจะถูกนับใหม่"
        ],
        additionalDetails: {
          title: "รายละเอียดเพิ่มเติม",
          details: [
            "ไม่จำเป็นต้องพัฒนาระบบสมาชิกเอง (สามารถเข้าสู่ระบบผ่าน Social media, Okta, Auth0 และอื่น ๆ ได้)",
            "สามารถ Mockup API ได้ตามสมควร",
            "สามารถใช้เครื่องมือใดก็ได้ในการช่วยพัฒนาระบบ",
            "ส่งมอบงานโดยการ Publish ไฟล์ทั้งหมดและคู่มือขึ้นไปที่ Git แล้วส่ง URL เข้ามาที่ Email"
          ]
        }
      }
    }
  ];
  
  export default assignment;
  