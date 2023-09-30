// Define a type for a binary tree node that may have left and right children.
type TreeNode<T> = {
    value: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
};

// Create a binary tree with some sample data.
const tree: TreeNode<number> = {
    value: 1,
    left: {
        value: 2,
        left: { value: 4 },
        right: { value: 5 },
    },
    right: {
        value: 3,
        left: { value: 6 },
        right: { value: 7 },
    },
};

