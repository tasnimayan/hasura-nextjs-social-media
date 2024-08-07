// Responsible for showing only the avatar image

interface AvatarProps {
  src: string | null | undefined;
  size?: number;
  border?: boolean;
}

const Avatar = ({ size = 12, src, border = false }: AvatarProps) => {
  return (
    <div
      className={`relative rounded-full border-gray-300 ${
        border && "border-2"
      } w-${size} h-${size}`}
    >
      <div className="w-full h-full bg-gray-200 rounded-full border-2 border-white">
        <img
          src={src ?? "placeholder.png"}
          alt="avatar"
          className="w-full h-full object-cover rounded-full bg-no-repeat"
        />
      </div>
    </div>
  );
};

export default Avatar;
