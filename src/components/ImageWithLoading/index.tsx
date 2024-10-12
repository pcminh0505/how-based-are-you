'use client';
import ImageAdaptive from '@components/ImageAdaptive';
import classNames from 'classnames';
import type { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';
import type { StaticImageData } from 'next/image';
import { useCallback, useState } from 'react';

type ImageWithLoadingProps = {
  src: string | StaticImageData;
  alt: string;
  title?: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  wrapperClassName?: string;
  backgroundClassName?: string;
  imageClassName?: string;
  forceIsLoading?: boolean;
};

export default function ImageWithLoading({
  src,
  alt,
  title,
  width,
  height,
  wrapperClassName,
  backgroundClassName = 'bg-gray-10/50',
  imageClassName,
  forceIsLoading = false,
}: ImageWithLoadingProps) {
  const [imageIsLoading, setImageIsLoading] = useState<boolean>(true);

  const onLoad = useCallback(() => {
    setImageIsLoading(false);
  }, []);

  const isLoading = imageIsLoading || forceIsLoading;

  const figureClasses = classNames('overflow-hidden', wrapperClassName, {
    [`animate-pulse ${[backgroundClassName]}`]: isLoading,
  });

  const hasBlurDataUrl = typeof src !== 'string' && !!src.blurDataURL;
  const placeholder: PlaceholderValue = hasBlurDataUrl ? 'blur' : 'empty';
  const avatarClasses = classNames(
    'transition-all duration-200',
    imageClassName,
    {
      'opacity-0': isLoading && !hasBlurDataUrl,
      'opacity-50': isLoading && hasBlurDataUrl,
      'opacity-100': !isLoading,
    },
  );

  return (
    <figure className={figureClasses}>
      <ImageAdaptive
        src={src}
        className={avatarClasses}
        alt={alt}
        title={title}
        placeholder={placeholder}
        onLoad={onLoad}
        width={width}
        height={height}
        quality={100}
      />
    </figure>
  );
}
