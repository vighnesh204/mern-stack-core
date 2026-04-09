// Axios => ye bhi whi krega jo fetch karata hai bas ye jaada developer friendly hai

axios.get(`https://jsonplaceholder.typicode.com/posts`)
.then(response => {
    console.log(response.data); 
})

// isme hme ek he .then() me readable data mil jaata hai kyuki axios by default hi data ko readable format me convert kr deta hai
// axios.get() ye url se data aayega
// .then() ab wo readable data pr koi bhi operation kr skta hu
// 