function try1() {
  const a = "cocoa" 
  console.log("[try] before", a)

  if(true) {
    const a = "leaf"  
    console.log("[if] before", a)
    console.log("[if] after", a)
  }
  console.log("[if] before", a)
}
try1()