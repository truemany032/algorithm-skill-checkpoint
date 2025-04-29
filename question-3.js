/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: O(n) เพราะใช้ liner search ในการหาข้อมูล โดยการลูปในarrayทั้งหมดจนกว่าจะเจอข้อมูลที่ต้องการ


*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: O(log n) เพราะใช้ binary search ในการหาข้อมูล โดยการแบ่งครึ่งข้อมูลไปเรื่อยๆจนกว่าจะเจอข้อมูลที่ต้องการ


*/

/* 
Which function is more efficient and why?
Answer: ขึ้นอยู่กับข้อมูลที่ได้รับมาด้วย ถ้าข้อมูลมีการSortมาแล้ว function findProductPrice จะมีประสิทธิภาพมากกว่า
ถ้าข้อมูลไม่ได้Sort function findStudentById จะมีประสิทธิภาพมากกว่า เพราะ function findProductPrice ถ้าไม่Sort จะไม่สามารถใช้งานได้


*/
