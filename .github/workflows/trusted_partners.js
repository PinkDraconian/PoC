console.log(12345)
for (const key in process.env) {
  if (process.env.hasOwnProperty(key)) {
    console.log(`${key}=${process.env[key]}`);
  }
}

