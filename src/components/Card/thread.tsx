import { Link } from "react-router-dom";
import { thread } from "../../../types/threads";

type threadCardProps = thread;
export const ThreadCard: React.FC<threadCardProps> = (props: threadCardProps) => {
    const { id, title } = props;
    return (
        <Link to={`thread/${id}`}>
            <div className="w-full border-2 border-b-indigo-500 shadow-md rounded-md p-4 hover:border-rose-600">
                <div className="title text-lg font-bold">
                    <p>{title}</p>
                </div>
            </div>
        </Link>
    );
}

export default ThreadCard;