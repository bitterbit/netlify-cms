import NetlifyAuthenticator from './netlify-auth';
import ImplicitAuthenticator from './implicit-oauth';
import AwsGithubAuthenticator from './aws-github-authenticator';

export const NetlifyCmsLibAuth = { NetlifyAuthenticator, ImplicitAuthenticator, AwsGithubAuthenticator };
export { NetlifyAuthenticator, ImplicitAuthenticator, AwsGithubAuthenticator };
