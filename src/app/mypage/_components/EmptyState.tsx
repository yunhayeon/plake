interface EmptyStateProps {
  message: string;
}

const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <div className="flex h-full w-full flex-grow items-center justify-center">
      <p className="text-sm font-medium text-gray-500">{message}</p>
    </div>
  );
};

export default EmptyState;
