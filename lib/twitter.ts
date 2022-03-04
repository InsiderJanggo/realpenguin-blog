const getTweets = async(ids: string[]) => {
    if (ids.length === 0) {
        return [];
    }

    const queryParams = new URLSearchParams({
        ids: ids.join(','),
        expansions:
          'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id',
        'tweet.fields':
          'attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text',
        'user.fields': 'id,name,profile_image_url,protected,url,username,verified',
        'media.fields':
          'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics'
    });

    const response = await fetch(
        `https://api.twitter.com/2/tweets?${queryParams}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.TWITTER_API_KEY}`
          }
        }
    );
    const tweets = await response.json();

    
}

export default getTweets