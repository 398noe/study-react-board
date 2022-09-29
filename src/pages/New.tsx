export const New = () => {
    return (
        <div className="py-4">
            <div className="container max-w-md mx-auto p-4">
                <p className="p-4 text-3xl font-bold text-center">スレッドを作成</p>
                <div className="flex flex-col gap-4">
                    <p>スレッド名</p>
                    <input type="text" placeholder="Type here" className="input input-bordered" />
                    <div className="btn w-24 ml-auto">新規作成</div>
                </div>
            </div>
        </div>
    );
}

export default New;