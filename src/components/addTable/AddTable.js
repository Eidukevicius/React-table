const Main = ()=>{
    const handleClick = ()=>{
        setClicked(true)
    }

    const handleFormDate = (data)=>{
        setPosts((prevData)=>{
            return[data,...prevData]
        })
    }

    console.log('is main komponeto', posts)
    return(
        <Table className="form">
             <div className="container">
            {posts.map((post) =>
                <Form title={post.title} description={posts.description}/>
                )}
                <button onClick={handleClick}>Paspaudziau</button>
            </div>
            <div>
                <h2>Prideti naujiena</h2>
                <AddArticle onSave={handleFormDate}/>
            </div>
        </Table>
    );
}
 
export default Main;