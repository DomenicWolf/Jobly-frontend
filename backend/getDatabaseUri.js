const uri = () => {
    return (process.env.NODE_ENV === "test")
      ? `postgresql://dom:${'dom123321!'}@127.0.0.1:5432/jobly_test`
      : process.env.DATABASE_URL || `postgresql://dom:${'dom123321!'}@127.0.0.1:5432/jobly`;
}


export default uri;