import PropTypes from "prop-types";

export const IDType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

export const HeadingType = PropTypes.shape({
    id: IDType,
    content: PropTypes.string.isRequired,
});

export const TextType = PropTypes.shape({
    id: IDType,
    content: PropTypes.string.isRequired,
});

export const ImageType = PropTypes.shape({
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
        .isRequired,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
});

export const ButtonComponentType = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    label: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    path: PropTypes.string,
    size: PropTypes.oneOf(["large", "small", "medium"]),
    color: PropTypes.oneOf(["primary", "primary-alta"]),
    fullwidth: PropTypes.bool,
};

// eslint-disable-next-line no-unused-vars
const { children, ...restButtonTypes } = ButtonComponentType;

export const ButtonType = PropTypes.shape({
    content: PropTypes.string.isRequired,
    ...restButtonTypes,
});

export const SectionTitleType = PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
});

export const ItemType = PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    path: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(ImageType),
});

export const ProductType = PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    latestBid: PropTypes.string.isRequired,
    price: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
    likeCount: PropTypes.number,
    images: ImageType,
    auction_date: PropTypes.string,
    authors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            image: ImageType,
        })
    ),
    bitCount: PropTypes.number,
});

export const SellerType = PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    total_sale: PropTypes.number.isRequired,
    image: ImageType.isRequired,
    top_since: PropTypes.string,
    isVarified: PropTypes.bool,
});

export const CollectionType = PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    total_item: PropTypes.number.isRequired,
    image: ImageType.isRequired,
    thumbnails: PropTypes.arrayOf(ImageType).isRequired,
    profile_image: ImageType.isRequired,
});

export const FeatureProductsType = PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string,
    }),
    image: ImageType.isRequired,
});

export const NotifactionType = PropTypes.shape({
    id: IDType,
    title: PropTypes.string,
    description: PropTypes.string,
    path: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    image: ImageType,
});



// ===================================
export const LandOwnerType = PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired
    })
})
export const LandNFTType = PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    template: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    openToBuy: PropTypes.bool.isRequired,
    expireTime: PropTypes.number.isRequired,
    lender: PropTypes.shape(LandOwnerType),
    owner: PropTypes.shape(LandOwnerType),
    lendExpireTime: PropTypes.number.isRequired,
    totalReward: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(ImageType),
    price: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
});